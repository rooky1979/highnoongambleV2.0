sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      "sap/ui/model/Filter",
      "sap/ui/model/FilterOperator",
      "sap/ui/core/routing/History"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, History) {
      "use strict";
  
      return Controller.extend("HNGv2.highnoongamble.controller.GodShot", {
        onInit: function () {
          var sobercardsModel = new sap.ui.model.json.JSONModel();
          sobercardsModel.loadData("model/godshot.json");
        },
        godShot: function () {
          var random = Math.floor(Math.random() * 450) + 1;
          var aFilter = [];
          if (random) {//MIGHT CHANGE
            aFilter.push(new Filter("bookid", FilterOperator.Contains, random));
            //add filter
          }
          // filter binding
          var oList = this.byId("godshot");
          var oBinding = oList.getBinding("items");
          oBinding.filter(aFilter);
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
