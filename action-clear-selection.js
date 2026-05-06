/*\
title: $:/plugins/rimir/theme/action-clear-selection.js
type: application/javascript
module-type: widget

Action widget that clears the document's text selection.

Used to wipe the word-selection a browser makes on dblclick before swapping a
rendered view for an editor — without this, the selection lingers in the
new iframe-backed textarea and shows up as a fully-highlighted (blue) field.

\*/
(function(){

"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var ActionClearSelection = function(parseTreeNode, options) {
	this.initialise(parseTreeNode, options);
};

ActionClearSelection.prototype = new Widget();

ActionClearSelection.prototype.render = function(parent, nextSibling) {
	this.computeAttributes();
	this.execute();
};

ActionClearSelection.prototype.execute = function() {
	this.makeChildWidgets();
};

ActionClearSelection.prototype.refresh = function(changedTiddlers) {
	return this.refreshChildren(changedTiddlers);
};

ActionClearSelection.prototype.invokeAction = function(triggeringWidget, event) {
	if(typeof window === "undefined" || !window.getSelection) { return true; }
	var sel = window.getSelection();
	if(sel && sel.removeAllRanges) { sel.removeAllRanges(); }
	return true;
};

exports["action-clear-selection"] = ActionClearSelection;

})();
