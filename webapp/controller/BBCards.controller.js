sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
      "use strict";
  
      return Controller.extend("HNGv2.highnoongamble.controller.BBCards", {
        onInit: function () {
          var bbcardTable = this.getView().byId("bbcards")
          var bbcardsModel = new sap.ui.model.json.JSONModel();
          bbcardsModel.loadData("model/bbcards.json")
          bbcardTable.setModel(bbcardsModel);
          //this.getView().setModel(bbcards, "bbcards");
        },
        onSearch: function(oEvent) {
          /* var filters = [];
          var query = event.getSource().getValue();
          if(query && query.length > 0) {
            var filter = new Filter("id", sap.ui.FilterOperator.Contains, query);
            filters.push(filter);
          }
          var list = this.getView().byId("bbcards");
          var binding = list.getBinding("items");
          binding.filter(filters, "application"); */
          var aFilter = [];
          var sQuery = oEvent.getParameter("query");
          if (sQuery) {
              aFilter.push(new Filter("id", FilterOperator.Contains, sQuery));
          }

          // filter binding
          var oList = this.byId("bbcards");
          var oBinding = oList.getBinding("items");
          oBinding.filter(aFilter);
        }
      });
    }
  );
  //GO BACK BUTTON