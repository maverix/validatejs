'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationRenderer = undefined;

var _aureliaPal = require('aurelia-pal');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidationRenderer = exports.ValidationRenderer = function () {
  function ValidationRenderer() {
    _classCallCheck(this, ValidationRenderer);
  }

        function getParent(node) {
            if (node == undefined || node == null || node.parentElement == undefined || node.parentElement == null)
              return null;
            
            if (node.parentElement.classList.contains('form-group'))
              return nodel.parentElement;

            var parent = $(node).parents('.form-group');
            
            if (parent.length > 0)
              return parent[0];
          
            return node.parentElement;
        }

        ValidationRenderer.prototype.renderErrors = function renderErrors(node, relevantErrors) {
          this.unrenderErrors(node);
          if (relevantErrors.length) {
            var parent = getParent(node);

            parent.classList.add('has-error');
            relevantErrors.forEach(function (error) {
              if (parent.textContent.indexOf(error.message) === -1) {
                var errorMessageHelper = DOM.createElement('span');
                var errorMessageNode = DOM.createTextNode(error.message);
                errorMessageHelper.appendChild(errorMessageNode);
                errorMessageHelper.classList.add('help-block', 'au-validation');
                parent.appendChild(errorMessageHelper);
              }
            });
          }
        };

        ValidationRenderer.prototype.unrenderErrors = function unrenderErrors(node) {
          var deleteThese = [];

          var parent = getParent(node);
          parent.classList.remove('has-error');
          var children = parent.children;
          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.classList.contains('help-block') && child.classList.contains('au-validation')) {
              deleteThese.push(child);
            }
          }
          deleteThese.forEach(function (child) {
            child.parentElement.removeChild(child);
          });
        };

  return ValidationRenderer;
}();