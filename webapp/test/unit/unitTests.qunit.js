/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"HNGv2/highnoongamble/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
