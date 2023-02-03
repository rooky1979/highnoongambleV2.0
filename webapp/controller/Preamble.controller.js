sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("HNGv2.highnoongamble.controller.Preamble", {
            onInit: function () {
                
                /* var path = jQuery.sap.getModulePath("HNGv2.highnoongamble", "webapp/model/preamble.json");

                var model = new JSONModel(path);

                this.getView().setModel(model, "preamble");  */
                /*this below code for get the JSON Model form Manifest.json file*/
			var dataModel = this.getOwnerComponent().getModel("preamble");
			this.getView().setModel(dataModel, "preamble");

            },
            pressTile: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("preamble");
            }
        });
    });
    //GO BACK BUTTON