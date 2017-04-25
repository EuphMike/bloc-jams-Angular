(function(){
    function AlbumCtrl(Fixtures, SongPlayer) {
      this.albumInfo = Fixtures.getAlbum();
      this.songPlayer = SongPlayer;
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
