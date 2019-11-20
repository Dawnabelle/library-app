import Controller from "@ember/controller";
import { match, not } from "@ember/object/computed";

export default Controller.extend({
  headerMessage: "Libraries are cool",
  responseMessage: "",
  emailAddress: "",

  isValid: match("emailAddress", /^.+@.+\..+$/),
  isDisabled: not("isValid"),

  actions: {
    saveInvitation() {
      const email = this.get("emailAddress");

      const newInvitation = this.store.createRecord("invitation", { email: email });
      newInvitation.save().then(response => {
        this.set("responseMessage", `Thank you! We've saved your email address with the ID: ${response.get('id')}`);
        this.set("emailAddress", " "); 
      });
    }
  }
});