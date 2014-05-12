'use strict';

angular.module('blogApp')
  .service('Registry', function Registry() {
    var registry = this;

    registry.store = {
      pages: [],
      rows: []
    };

    /**
     * Adds a page to the Registry
     * @param page
     */
    registry.addPage = function(page) {
      if (!angular.isObject(page) ||
          !angular.isString(page.id) ||
          !angular.isObject(page.page)) {
        throw new Error('A page must be an object with a numeric id, and a reference to a Raphael paper');
      }
      registry.store.pages.push(page);
    };

    /**
     * Gets a page stored in the registry by its id
     * @param id
     * @returns {page|*}
     */
    registry.getPage = function(id) {
      if (!angular.isString(id)) {
        throw new Error('The id must be valid');
      }
      var storedPage = _.find(registry.store.pages, {'id': id});
      return storedPage ? storedPage.page : null;
    };

    /**
     * Adds a row to the Registry
     * @param row
     */
    registry.addRow = function(row) {
      if (!angular.isObject(row) ||
          !angular.isString(row.id) ||
          !angular.isObject(row.row)) {
        throw new Error('A row must be an object with a numeric id, and a reference to a Raphael object');
      }
      registry.store.rows.push(row);
    };

    /**
     * Gets a row from the Registry
     * @param id
     * @returns {row|*}
     */
    registry.getRow = function(id) {
      if (!angular.isString(id)) {
        throw new Error('The id must be valid');
      }
      var storedRow = _.find(registry.store.rows, {'id': id});
      return storedRow ? storedRow.row : null;
    };

    return registry;
  });
