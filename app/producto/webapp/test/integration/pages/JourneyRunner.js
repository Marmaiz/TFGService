sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"producto/test/integration/pages/ProductoList",
	"producto/test/integration/pages/ProductoObjectPage"
], function (JourneyRunner, ProductoList, ProductoObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('producto') + '/test/flp.html#app-preview',
        pages: {
			onTheProductoList: ProductoList,
			onTheProductoObjectPage: ProductoObjectPage
        },
        async: true
    });

    return runner;
});

