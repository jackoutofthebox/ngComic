'use strict';

angular.module('blogApp')
  .service('Registry', function Registry() {
    var registry = this;

    registry.store = {
      pages: []
    };

    registry.addPage = function(page) {
      if (!angular.isObject(page) ||
          !angular.isString(page.id) ||
          !angular.isObject(page.page)) {
        throw new Error('A page must be an object with a numeric id, and a reference to a Raphael paper');
      }
      registry.store.pages.push(page);
    };

    registry.getPage = function(id) {
      if (!angular.isString(id)) {
        throw new Error('The id must be a number');
      }
      var storedPage = _.find(registry.store.pages, {'id': id});
      return storedPage ? storedPage.page : null;

    };

    return registry;
  });
