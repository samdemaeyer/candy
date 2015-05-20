# candy
Playing around with CSV 

## routing
when opening the app please remember that desktop users will be redirected:
```javascript
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
```

## task

* The site should be responsive up to the resolution of a tablet and use HTML5 and CSS3.
* Desktop users should be redirected to http://www.candyspace.com
* A user should be able to highlight a post by tapping it, then drag the post to change order. A 3rd party library can be used.

## stack

Technology used here is Meteor fullstack framework and SASS. I chose to use Meteor for the fact that it promotes simplicity and speed when prototyping new ideas. It requires use of only one language (Javascript) which makes full stack development super easy. I can also save a lot of time by leveraging usage of smart packages (such as Sortable package used in the app).
