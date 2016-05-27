(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('htTopNav', htTopNav);

  /* @ngInject */
  function htTopNav() {
    var directive = {
      bindToController: true,
      controller: TopNavController,
      controllerAs: 'vm',
      restrict: 'EA',
      link: link,
      scope: {
        'navline': '='
      },
      templateUrl: 'app/layout/ht-top-nav.html'
    };

    TopNavController.$inject = ['$scope'];

    /* @ngInject */
    function TopNavController($scope) {
      var vm = this;
      $scope.isCollapsed = true;
    }

    function link(scope, element, attrs) {
      $(document).scroll(function() {
        
        if($(document).scrollTop() > 10) {
          element.fadeOut();
        }
        else {
           element.fadeIn();
        }
      });
    }

    return directive;
  }
})();
