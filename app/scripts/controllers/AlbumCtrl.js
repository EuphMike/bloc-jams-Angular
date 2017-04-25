(function(){
    function AlbumCtrl(Fixtures, SongPlayer) {
      this.albumInfo = Fixtures.getAlbum();
      this.SongPlayer = SongPlayer;
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
