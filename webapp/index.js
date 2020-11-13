sap.ui.define([

	//"sap/m/Text"
	"sap/ui/core/mvc/XMLView"

/*], function () {
	"use strict";

// alert("OpenUI5 passo a passo no udemy!");

	new Text({
		text: "Hello World"
	}).placeAt("content");
});	*/

], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "passoapasso.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});

