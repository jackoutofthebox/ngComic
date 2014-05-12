'use strict';

angular.module('blogApp')
  .directive('panel', function ($timeout, Registry) {
    return {
      template: '<div class="panel"></div>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        $timeout(function() {
          var pageContainer = element.parents('article.page').first();
          var pageHeight = pageContainer.data('height');
          var pageId = pageContainer.data('id');
          var page = Registry.getPage(pageId);
          var parentRowContainer = element.parent('.row');
          var rowId = parentRowContainer.data('id');
          var parentRow = Registry.getRow(rowId);

          var previousPanels = element.prevAll('.panel');
          var previousPanelsSize = previousPanels.size();
          var siblingPanels = parentRowContainer.find('.panel');
          var siblingPanelsSize = siblingPanels.size();

          var previousRows = parentRowContainer.prevAll('.row');
          var previousRowsSize = previousRows.size();
          var siblingRows = pageContainer.find('.row');
          var siblingRowsSize = siblingRows.size();

          var rowWidth = parentRowContainer.data('width');
          var rowHeight = parentRowContainer.data('height');
          var bleed = attrs.bleed || parentRowContainer.data('bleed');

          var strokeWidth;
          if (angular.isUndefined(attrs.strokeWidth)) {
            strokeWidth = 1;
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

          pageHeight -= bleed * 2;
          var panelOrigin = (bleed + strokeWidth) * 2;
          var width = (rowWidth - (panelOrigin * (siblingPanelsSize + 1))) / siblingPanelsSize;
          var height = (pageHeight - (panelOrigin * (siblingRowsSize + 1))) / siblingRowsSize;
          var left = panelOrigin * (previousPanelsSize + 1.5) + previousPanelsSize * width;
          var top = panelOrigin * (previousRowsSize + 1.5) + previousRowsSize * height;

          var wobble;
          if (angular.isNumber(strokeWidth)) {
            wobble = attrs.wobble || pageContainer.data('wobble');
          } else {
            wobble = 1;
          }

          var panel = page.drawnRect(
            left,
            top,
            width,
            height,
            wobble
          );
          console.log(strokeWidth);
          if (angular.isNumber(strokeWidth)) {
            panel.attr(
              {
                'stroke': strokeColor,
                'stroke-width': strokeWidth
              }
            );
          }
        }, 20);
      }
    };
  });
