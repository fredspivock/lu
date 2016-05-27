(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function DashboardController($q, dataservice, logger) {
    var vm = this;
    vm.news = {
      title: 'ludia',
      description: 'Turtle App!.'
    };
    vm.messageCount = 0;
    vm.turtles = [];
    vm.title = 'Dashboard';
    vm.getTurtle = getTurtle;
    vm.getTurtles = getTurtles;

    activate();

    function activate() {
      var promises = [getMessageCount(), getTurtles()];
      return $q.all(promises).then(function() {
        logger.info('Check dem turtles!');
      });
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }

    function getTurtles() {
      return dataservice.getTurtles().then(function(data) {
        vm.turtles = data;
        console.log(vm.turtles);
        return vm.turtles;
      });
    }

    function getTurtle(id) {
      return dataservice.getTurtle(id).then(function(data) {
        vm.turtles = data;
        console.log(vm.turtles);
        return vm.turtles;
      });
    }
  }
})();
