angular.module('SignupMod').controller('SignupCtrl',['$scope', '$http', function($scope, $http){
  console.log('Signup Controller Initialized');

  $scope.runSignup = function(){
    console.log('Sign up' + $scope.name);

    //Submit to Sails Server via post request
    $http.post('/signup', {
      name: $scope.name,
      email: $scope.email,
      password: $scope.passwords
    })
    .then(function onSuccess(response){
      window.location = '/user'
    })
    .catch(function onError(err){
      console.log('Error: '+err);
    })
    // .finally(function either(){
    //
    // })
  }
}])
