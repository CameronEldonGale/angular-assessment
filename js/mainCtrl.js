angular.module('assessment').controller('mainCtrl',function($scope, mainService){

  mainService.getData().then(function(res){
    console.log(res.data);
    $scope.products = res.data
  })

})
