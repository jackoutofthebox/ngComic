'use strict';

angular.module('blogApp')
  .controller('CanvasCtrl', function ($scope) {
    var paper = new Raphael('page', 500, 500);
    paper.drawnRect(5, 5, 490, 490, 5).attr(
      {
        'stroke-width': '3'
      }
    );
    paper.drawnRect(15, 15, 470, 470, 5).attr(
      {
        'fill': 'url("images/yeoman.png")',
        'stroke-width': '3'
      }
    );


  });
