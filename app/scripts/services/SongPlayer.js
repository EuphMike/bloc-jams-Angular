(function() {
    function SongPlayer(Fixtures) {
         var SongPlayer = {};
         /**
         * @desc Gets album from Fixtures.js Service
         * @type {Object}
         */
         var currentAlbum = Fixtures.getAlbum();
         /**
         * @desc Buzz object audio file
         * @type {Object}
         */
         var currentBuzzObject = null;
         /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
         var setSong = function(song) {
              if (currentBuzzObject) {
                  currentBuzzObject.stop();
                  SongPlayer.currentSong.playing = null
              }

          currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
           });

          SongPlayer.currentSong = song
      };
        /**
        /* @desc plays currentBuzzObject and sets playing property of song to true
        /* @param {Object} song
        */
         var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
         };

         /**
         * @function stopSong
         * @desc Stops the song
         * @param {Object} song
         */
         var stopSong = function(song) {
              currentBuzzObject.stop();
              song.playing = null;
         };

         /**
         * @function getSongIndex
         * @desc Returns index of Song
         * @param {Object} song
         */
         var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
         };

         /**
         * @desc Active song object from list of songs
         * @type {Object}
         */
         SongPlayer.currentSong = null;

         /**
         /* @desc plays the current song
         /* @param {Object} song
         */
         SongPlayer.play = function(song) {
              song = song || SongPlayer.currentSong;
              if (SongPlayer.currentSong !== song) {
                  setSong(song);
                  playSong(song);
              } else if (SongPlayer.currentSong === song) {
                  if (currentBuzzObject.isPaused()) {
                      playSong(song);
              }
          }
      };
          /**
          /* @desc pauses the current song
          /* @param {Object} song
          */
          SongPlayer.pause = function(song) {
              song = song || SongPlayer.currentSong;
              console.log(song);
              currentBuzzObject.pause();
              song.playing = false;
          };

          /**
          * @function SongPlayer.previous
          * @desc Plays previous song
          * @param {Object} song
          */
          SongPlayer.previous = function() {
              var currentSongIndex = getSongIndex(SongPlayer.currentSong);
              currentSongIndex --;

              if (currentSongIndex < 0) {
                  stopSong(SongPlayer.currentSong)
              } else {
                  var song = currentAlbum.songs[currentSongIndex];
                  setSong(song);
                  playSong(song);
              }
          };
          /**
          * @function SongPlayer.next
          * @desc Plays the next song
          * @param {Object} song
          */
          SongPlayer.next = function() {
              var currentSongIndex = getSongIndex(SongPlayer.currentSong);
              currentSongIndex ++;

              if (currentSongIndex >= currentAlbum.songs.length) {
                  stopSong(SongPlayer.currentSong);
              } else {
                  var song = currentAlbum.songs[currentSongIndex];
                  setSong(song);
                  playSong(song);
              }
          }

      return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
