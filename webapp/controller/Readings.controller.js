sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("HNGv2.highnoongamble.controller.Readings", {
            onInit: function () {

            },
            pressTile: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("preamble");
            }
        });
    });