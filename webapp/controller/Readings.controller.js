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
            onNavToPreamble: function() {
                this.getRouter().navTo("preamble");
            },
    
            onNavToChapter3: function() {
                this.getRouter().navTo("chapter3");
            },
            onNavToChapter5: function() {    
                this.getRouter().navTo("chapter5");
            },
            onNavToTraditions: function() {    
                this.getRouter().navTo("traditions");
            },
            onNavToResponsibility: function() {    
                this.getRouter().navTo("responsibility");
            },
        
            getRouter: function() {
                return this.getOwnerComponent().getRouter();
            }
        });
    });