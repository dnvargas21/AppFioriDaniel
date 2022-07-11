/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"AppFioriDaniel/appfioridaniel/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
