Blogger.Router.map(function(){
	// to over ride and {path: '/'}to override the default.
	this.resource('posts', {path: '/'});
	this.resource('about');

	// This is how we make a nested route
	this.resource('contact', function(){
		this.resource('phone');
		this.resource('email');
	});
});