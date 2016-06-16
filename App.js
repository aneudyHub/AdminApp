var app = angular.module("AppAdmin",["ui.router"]);

app.config(function($stateProvider){

	$stateProvider
		.state("Home",{
			url:"/app",
			controller:"HomeController",
			templateUrl:"Views/Home/index.html"

		})
		.state("Login",{
			url:"/Login",
			controller:"LoginController",
			templateUrl:"Views/User/Login.html"

		})
		.state("SignUp",{
			url:"/SignUp",
			controller:"SignUpController",
			templateUrl:"Views/User/SignUp.html"

		})
})
