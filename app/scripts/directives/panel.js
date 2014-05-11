'use strict';

angular.module('blogApp')
  .directive('panel', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the panel directive');
      }
    };
  });
