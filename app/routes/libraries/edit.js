import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    // downloads single record from the server with the given id 
    // the id comes from the url 
    return this.store.findRecord('library', params.library_id);
  },

  actions: {
    saveLibrary(library) {
      // saves changes and redirects user to main libraries page
      library.save().then(() => this.transitionTo('libraries'));
    },

    willTransition(transition) {
      // called when we are ready to leave the page 
      let model = this.controller.get('model');

      // user may have modified something, dirty checking
      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Are you sure you'd like to leave?");

        if (confirmation) {
          // if the user decides to leave the screen without saving 
          model.rollbackAttributes();
        } else {
          // if the user would like to stay on the page 
          transition.abort();
        }
      }
    }
  }
});
