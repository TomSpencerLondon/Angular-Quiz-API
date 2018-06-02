(function(){

  angular
    .module("turtleFacts")
    .controller("listCtrl", ['$http', function ($http){
      var vm = this; 

      $http.get('http://0.0.0.0:3000/information.json')
      .then(function(response){
        vm.data = response.data; 
      })


    }]);

})();