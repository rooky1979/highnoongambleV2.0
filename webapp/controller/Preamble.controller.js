sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("HNGv2.highnoongamble.controller.Preamble", {
      onInit: function () {
        var preamble = new sap.ui.model.json.JSONModel(
          "model/preamble.json"
        );
        this.getView().setModel(preamble, "preamble");
      },
    });
  }
);
//GO BACK BUTTON
