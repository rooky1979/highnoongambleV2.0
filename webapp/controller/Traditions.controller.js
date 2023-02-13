sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
      "use strict";
  
      return Controller.extend("HNGv2.highnoongamble.controller.Traditions", {
        onInit: function () {
          var traditions = new sap.ui.model.json.JSONModel(
            "model/traditions.json"
          );
          this.getView().setModel(traditions, "traditions");
        },
      });
    }
  );
  //GO BACK BUTTON