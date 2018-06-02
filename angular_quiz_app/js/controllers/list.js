(function(){

  angular
    .module("turtleFacts")
    .controller("listCtrl", ['$http', function ($http){
      var vm = this; 
      vm.activeTurtle = {};
      vm.changeActiveTurtle = changeActiveTurtle;

      function changeActiveTurtle(index) {
        vm.activeTurtle = index
      }


      $http.get('http://0.0.0.0:3000/turtles.json')
      .then(function(response){
        vm.data = response.data; 
      })



    }]);

})();