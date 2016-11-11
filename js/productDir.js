angular.module('assessment').directive('productDir', function(){
  return {

      scope: {
        product: '='
      },
      templateUrl: 'views/product-tmpl.html',
      controller: function($scope){
        $scope.showImg = true;
        $scope.toggleImg = function(){
          $scope.showImg = !$scope.showImg
        }
      },
      link: function (scope, elem, attr) {

      }

  };
})
