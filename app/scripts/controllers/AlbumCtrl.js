(function(){
    function AlbumCtrl(Fixtures) {
      // Service injected into function AlbumCtrl
      this.albumInfo = Fixtures.getAlbum();
      console.log(this.albumInfo);
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
