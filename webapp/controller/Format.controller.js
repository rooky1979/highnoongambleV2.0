sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("HNGv2.highnoongamble.controller.Format", {
            onInit: function () {

            },
            onNavToScript: function() {
                this.getRouter().navTo("script");
            },
    
            onNavToPostInChat: function() {
                this.getRouter().navTo("chat");
            },
            getRouter: function() {
                return this.getOwnerComponent().getRouter();
            }
        });
    });