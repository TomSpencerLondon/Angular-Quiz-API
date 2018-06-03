(function(){

  angular
    .module("turtleFacts")
    .controller("listCtrl", ListController); 
    
    ListController.$inject = ['quizMetrics', '$http'];
    
    function ListController(quizMetrics, $http){
      var vm = this; 

      vm.quizMetrics = quizMetrics;
      vm.activeTurtle = {};
      vm.changeActiveTurtle = changeActiveTurtle;
      vm.activateQuiz = activateQuiz;
      vm.search = "";
      vm.quizActive = false;

      function changeActiveTurtle(index) {
        vm.activeTurtle = index
      }

      function activateQuiz(){
        quizMetrics.changeState(true);
      }


      $http.get('http://0.0.0.0:3000/turtles.json')
      .then(function(response){
        vm.data = response.data; 
      })

    };

})();