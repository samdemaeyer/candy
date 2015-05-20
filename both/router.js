Router.route('/', {
	name: 'main',
    onBeforeAction: function() {
        if (Meteor.Device.isDesktop()) {
        	window.location = "http://www.candyspace.com";
        } else {
        	this.next();
        };
    },
});