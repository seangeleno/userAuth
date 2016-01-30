angular.module('SignupMod').controller('SignupCtrl',['$scope', function($scope){
  console.log('Signup Controller Initialized');

  $scope.runSignup = function(){
    console.log('Sign up'+$scope.name);
  }
}])
