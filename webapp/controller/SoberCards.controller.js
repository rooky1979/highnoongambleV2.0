sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
      "use strict";
  
      return Controller.extend("HNGv2.highnoongamble.controller.SoberCards", {
        onInit: function () {
          var sobercardsModel = new sap.ui.model.json.JSONModel();
          sobercardsModel.loadData("model/sobercards.json")
        },
        onSearch: function(oEvent) {
          var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("id", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("sobercards");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
        },
      });
    }
  );