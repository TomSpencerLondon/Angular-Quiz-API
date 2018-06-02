(function(){

  angular
    .module("turtleFacts")
    .controller("listCtrl", ['$http', ListController]); 
    
    
    function ListController($http){
      var vm = this; 

      vm.activeTurtle = {};
      vm.changeActiveTurtle = changeActiveTurtle;
      vm.activateQuiz = activateQuiz;
      vm.search = "";
      vm.quizActive = false;

      function changeActiveTurtle(index) {
        vm.activeTurtle = index
      }

      function activateQuiz(){
        vm.quizActive = true
      }


      $http.get('http://0.0.0.0:3000/turtles.json')
      .then(function(response){
        vm.data = response.data; 
      })



    };

})();