Ext.Loader.setPath({
    'Ext': "./sdk/src"
});


Ext.application({

    models: [
    'Todo'
    ],
    stores: [
    'Todos'
    ],
    views: [
    'Todos'
    ],

    /**
    *  Add the application controller.
    */
    controllers: ["Todos"],

    name: 'MyApp',

    launch: function() {
        Ext.create('MyApp.view.Todos', {
            fullscreen: true
        });


    },

});