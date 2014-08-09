/** Treeform.js
 * Tree transformation library.
 *
 * Author: Nathan Clark <Nathan.Clark@tokenshift.com>
 */

;(function () {	
	var root = (typeof(window) != 'undefined' && window) || this;

	// Constructs a new transformer
	function Treeform(getChildren, setChildren) {
		if (typeof(getChildren) == 'string' &&
			typeof(setChildren) == 'undefined') {
			this._getChildren = function (node) {
				node[getChildren];
			};
			this._setChildren = function (node, children) {
				node[getChildren] = children;
			};
		}
		else if (typeof(getChildren) == 'function' &&
				 typeof(setChildren) == 'function') {
			this._getChildren = getChildren;
			this._setChildren = setChildren;
		}
		else {
			throw new TypeError('Invalid arguments');
		}
	}

	Treeform.prototype.transform = function (node) {
		// TODO
		return node;
	};

	// Exports
	
	root.Treeform = function (getChildren, setChildren) {
		return new Treeform(getChildren, setChildren);
	};
}.call(this));
