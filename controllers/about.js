// naming convention in which the controller name must be
//  capitalized version of the route name with Controller added to the end
// Ember.Controller.extend creates a sub class of the Ember.Controller class.
// You get all the default behavior of an Ember Controller plus any or anything else we define.
Blogger.AboutController = Ember.Controller.extend({

	// defining a property on the controller to show draculas pictuer.
	isPictuerShowing: false,
	// we're defining the showRealName action
	actions:{
		showRealName: function(){
			alert('Vlad III, Prince of Wallachia, was a member of the House of Drăculești, a branch of the House of Basarab, also known, using his patronymic, as Drăculea or Dracula.');
		},

		showPicture: function(){
			this.set('isPictuerShowing', true);
			this.isPictureShowing = true;
		}
	}		
});