sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, History) {
    "use strict";

    return Controller.extend("HNGv2.highnoongamble.controller.Preamble", {
      onInit: function () {
        var preamble = new sap.ui.model.json.JSONModel(
          "model/preamble.json"
        );
        this.getView().setModel(preamble, "preamble");
      },
      onNavBack: function () {
        var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("start", {}, true);
			}
      },
    });
  }
);
//GO BACK BUTTON
