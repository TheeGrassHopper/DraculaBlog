Blogger.ContactController = Ember.Controller.extend({
	
		// we're defining the your Secret Message action
		actions: {
		sendMessage: function(){
			var message = prompt('Type your Secret Message here:' );
		}
	}
});