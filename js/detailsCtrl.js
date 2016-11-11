angular.module('assessment').controller('detailsCtrl',function($scope, $stateParams, mainService){
  mainService.getProduct($stateParams.id).then(function(res){
    $scope.product = res.data
  })

  $scope.showImg = true;
  $scope.toggleImg = function(){
    $scope.showImg = !$scope.showImg
  }
})
