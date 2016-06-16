app.service("AuthService",function($http,$state){

	this.Login =  function(data){

		if(data!=null){
			var newData= {
				Name:data.Name,
				Password:this.encode(data.password)

			};


			$http.post("PHP/loginUser.php",newData).success(function(response){
				
				if(response.length!=0){
					console.log(response[0]);
					// var d = {
					// 	User:response[0].UserName,
					// 	Type:response[0].Type
					// };
					//localStorage.setItem("Auth",JSON.stringify({Auth:d}));
					localStorage.setItem("AuthName",response[0].UserName);
					localStorage.setItem("AuthType",response[0].Type);
					localStorage.setItem("AuthId",response[0].id);
					
					$state.go("Home");
				}else{
					console.log("no existe");
					/* mensaje de que no existe el usuario*/

				}

			}).error(function(e){


			})
		}

	};


	this.encode= function(md){

		return md5(md);
	};

	this.logout= function(){
		localStorage.clear('Auth');
		$state.go("Login");
	}


	this.SignUp = function(){

	}

	


});