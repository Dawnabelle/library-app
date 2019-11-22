import Route from '@ember/routing/route';

export default Route.extend({
  model() {
        // downloads single record from the server with the given id 
    // the id comes from the url 
    return this.store.findAll("invitation");
  },

  actions: {
    deleteInvitation(invitation) {
      let confirmation = confirm("Are you sure?");
      
      if (confirmation) {
        invitation.destroyRecord();
      }
    }
  }
});