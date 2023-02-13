sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
      "use strict";
  
      return Controller.extend("HNGv2.highnoongamble.controller.Chapter5", {
        onInit: function () {
          var chapter5 = new sap.ui.model.json.JSONModel(
            "model/chapter5.json"
          );
          this.getView().setModel(chapter5, "chapter5");
        },
      });
    }
  );
  //GO BACK BUTTON