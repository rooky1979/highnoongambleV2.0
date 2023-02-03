/*global QUnit*/

sap.ui.define([
	"HNGv2/highnoongamble/controller/start.controller"
], function (Controller) {
	"use strict";

	QUnit.module("start Controller");

	QUnit.test("I should test the start controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
