sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
      "use strict";
  
      return Controller.extend("HNGv2.highnoongamble.controller.BBCards", {
        onInit: function () {
          var bbcards = new sap.ui.model.json.JSONModel(
            "model/bbcards.json"
          );
          this.getView().setModel(bbcards, "bbcards");
        },
      });
    }
  );
  //GO BACK BUTTON