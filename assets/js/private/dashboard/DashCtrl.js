angular.module('DashMod').controller('DashCtrl',['$scope', '$http', function($scope, $http){
  $scope.getUser = function(){
    console.log('Getting User...');

    $http.get('/getuser')
    .then(function onSuccess(user){
      console.log(user);
    })
    .catch(function onError(err){
      console.log(err);
    })
  }


}])