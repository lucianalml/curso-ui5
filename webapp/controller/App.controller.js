sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("llima.sap.ui.demo.walkthrough.controller.App", {

        onOpenDialog: function() {
            this.getOwnerComponent().openHelloDialog();
        }
    });

});