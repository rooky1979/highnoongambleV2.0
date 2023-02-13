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

    return Controller.extend(
      "HNGv2.highnoongamble.controller.AdditionalCliches",
      {
        onInit: function () {
          var bbcardsModel = new sap.ui.model.json.JSONModel();
          bbcardsModel.loadData("model/additionalcliches.json");
        },
        onSearch: function (oEvent) {
          var aFilter = [];
          var sQuery = oEvent.getParameter("query");
          if (sQuery) {
            aFilter.push(new Filter("id", FilterOperator.Contains, sQuery));
          }
          // filter binding
          var oList = this.byId("additionalcliches");
          var oBinding = oList.getBinding("items");
          oBinding.filter(aFilter);
        },
        godShot: function () {
          var random = Math.floor(Math.random() * 101) + 1;
          var aFilter = [];
          if (random) {
            aFilter.push(new Filter("id", FilterOperator.Contains, random));
          }
          // filter binding
          var oList = this.byId("additionalcliches");
          var oBinding = oList.getBinding("items");
          oBinding.filter(aFilter);
        },
      }
    );
  }
);
//GO BACK BUTTON
