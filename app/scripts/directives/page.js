'use strict';

angular.module('blogApp')
  .directive('page', function (Registry) {
    return {
      template: '<article class="page"><div class="page_container"></div><div ng-transclude></div></article>',
      restrict: 'E',
      replace: true,
      transclude: true,
      link: function preLink(scope, element, attrs) {
        var pageContainer = element.find('.page_container');
        var width = attrs.width || element.parent().width();
        var height = attrs.height || element.parent().height();
        var bleed = attrs.bleed || 10;
        var wobble = attrs.wobble || 1;
        var strokeWidth = attrs.strokeWidth || 3;
        var strokeColor = attrs.strokeColor || '#000';
        var page = new Raphael(pageContainer[0], width, height);
        var mainFrame = page.drawnRect(bleed + strokeWidth,
                                     bleed + strokeWidth,
                                     width - (bleed + strokeWidth) * 2,
                                     height - (bleed + strokeWidth) * 2,
                                     wobble);
        mainFrame.attr({
          'stroke': strokeColor,
          'stroke-width': strokeWidth
        });
        var id = Raphael.createUUID();
        page.id = id;
        element
          .attr('id', 'page_' + id)
          .data({
          'id': id,
          'width': width,
          'height': height,
          'bleed': bleed,
          'wobble': wobble,
          'strokeWidth': strokeWidth,
          'strokeColor': strokeColor
        });
        Registry.addPage({'id': id, 'page': page});
      }
    };
  });
