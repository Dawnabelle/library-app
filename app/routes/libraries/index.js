import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord("contact");
  }, 

  actions: {
    saveContact(newcontact) {
      newcontact.save().then(() => this.transitionTo("contacts"));
    },
    willTransition() {
      // rollbackAttributes() removes the recofrd from the store if the model 'is new'
      this.controller.get("model").rollbackAttributes();
    },
    deleteContact(contact) {
      let confirmation = confirm("Are you sure?");

      if (confirmation) {
        contact.destroyRecord();
      }
    }
  }
});
