sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
      "use strict";
  
      return Controller.extend("HNGv2.highnoongamble.controller.Responsibility", {
        onInit: function () {
          var responsibility = new sap.ui.model.json.JSONModel(
            "model/responsibility.json"
          );
          this.getView().setModel(responsibility, "responsibility");
        },
      });
    }
  );
  //GO BACK BUTTON