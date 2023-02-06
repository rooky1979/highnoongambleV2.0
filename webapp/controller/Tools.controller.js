sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("HNGv2.highnoongamble.controller.Tools", {
            onInit: function () {

            },
            onNavToMyMind: function() {
                this.getRouter().navTo("myMind");
            },
    
            onNavToCommonCliches: function() {
                this.getRouter().navTo("commonCliches");
            },
            onNavToAdditionalCliches: function() {    
                this.getRouter().navTo("additionalCliches");
            },
            onNavToSoberCards: function() {    
                this.getRouter().navTo("soberCards");
            },
            onNavToBBCards: function() {    
                this.getRouter().navTo("bbCards");
            },
        
            getRouter: function() {
                return this.getOwnerComponent().getRouter();
            }
        });
    });