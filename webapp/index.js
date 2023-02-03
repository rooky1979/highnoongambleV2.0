sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "HNGv2.highnoongamble.view.Start"
	}).then(function (oView) {
		oView.placeAt("container");
	});

});