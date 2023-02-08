sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
      "use strict";
  
      return Controller.extend("HNGv2.highnoongamble.controller.Chapter3", {
        onInit: function () {
          var preamble = new sap.ui.model.json.JSONModel(
            "model/chapter3.json"
          );
          this.getView().setModel(chapter3, "chapter3");
        },
      });
    }
  );
  //GO BACK BUTTON