sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
      "use strict";
  
      return Controller.extend("HNGv2.highnoongamble.controller.Script", {
        onInit: function () {
          var script = new sap.ui.model.json.JSONModel(
            "model/script.json"
          );
          this.getView().setModel(script, "script");
        },
      });
    }
  );
  //GO BACK BUTTON