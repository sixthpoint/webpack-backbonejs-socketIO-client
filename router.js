var AppRouter = Backbone.Router.extend({
    routes: {
        'nowplaying': 'nowplaying',
        'schedule': 'schedule',
        '*actions': 'home'
    }
});

var initialize = function () {
    var appRouter = new AppRouter;

    appRouter.on('route:home', function () {
        $('#content').text("Home Screen");
    });

    appRouter.on('route:nowplaying', function () {
        require.ensure([], function () {
            require('./nowplayingView');
        });
    });

    appRouter.on('route:schedule', function () {
        require.ensure([], function () {
            require('./scheduleView');
        });
    });

    Backbone.history.start();
};

module.exports = initialize;
