'use strict';

angular.module('blogApp')
  .directive('pageRow', function ($timeout, Registry) {
    return {
      template: '<section class="row"></section>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        $timeout(function() {
          var pageContainer = element.parents('article').first();
          var id = pageContainer.data('id');
          var page = Registry.getPage(id);

          var siblingRows = pageContainer.find('section.row');
          var previousRows = element.prevAll('section.row');
          var pageWidth = attrs.width || pageContainer.data('width');
          var pageHeight = (attrs.height || pageContainer.data('height'));
          var bleed = attrs.bleed || pageContainer.data('bleed');

          var strokeWidth;
          if (angular.isUndefined(attrs.strokeWidth)) {
            strokeWidth = 0;
          }
          if (angular.isUndefined(attrs.strokeWidth) && angular.isString(attrs.strokeColor)) {
            strokeWidth = 1;
          }
          if (angular.isString(attrs.strokeWidth) && attrs.strokeWidth !== '') {
            strokeWidth = parseInt(attrs.strokeWidth);
            if (isNaN(strokeWidth)) {
              strokeWidth = 1;
            }
          }
          if (angular.isString(attrs.strokeWidth) && attrs.strokeWidth === '') {
            strokeWidth = pageContainer.data('strokeWidth');
          }
          var strokeColor = attrs.strokeColor || pageContainer.data('strokeColor');
          var rowOrigin = bleed + strokeWidth;
          var height = (pageHeight - rowOrigin * 2) / siblingRows.size();
          var left = rowOrigin;
          var top = (previousRows.size() * height) + rowOrigin;

          var wobble;
          if (angular.isNumber(strokeWidth)) {
            wobble = attrs.wobble || pageContainer.data('wobble');
          } else {
            wobble = 1;
          }

          var frame = page.drawnRect(
            left,
            top,
            pageWidth - (rowOrigin) * 2,
            height,
            wobble
          );
          if (angular.isNumber(strokeWidth)) {
            frame.attr(
              {
                'stroke': strokeColor,
                'stroke-width': strokeWidth
              }
            );
          }
        }, 10);
      }
    };
  });
