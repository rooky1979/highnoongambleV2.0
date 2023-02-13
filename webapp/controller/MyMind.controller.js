sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("HNGv2.highnoongamble.controller.MyMind", {
      onInit: function () {
        var myMindModel = new sap.ui.model.json.JSONModel();
        myMindModel.loadData("model/mymind.json");
      },
      onSearch: function (oEvent) {
        var aFilter = [];
        var sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilter.push(new Filter("id", FilterOperator.Contains, sQuery));
        }
        // filter binding
        var oList = this.byId("mymind");
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
      godShot: function () {
        var random = Math.floor(Math.random() * 526) + 1;
        var aFilter = [];
        if (random) {
          aFilter.push(new Filter("id", FilterOperator.Contains, random));
        }
        // filter binding
        var oList = this.byId("mymind");
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
    });
  }
);
