app.controller("AppController",function($scope,$http,$state,AuthService){
	

	$scope.CargarHome = function(){
		$state.go("Home");

	}
	

	


});