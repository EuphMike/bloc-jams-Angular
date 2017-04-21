(function(){
    function AlbumCtrl() {
      // Has to hold a copy of Album Picasso from fixtures.js//
      this.albumInfo = angular.copy(albumPicasso);
      console.log(this.albumInfo);
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl',AlbumCtrl);

})();
