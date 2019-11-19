import Controller from "@ember/controller";
import { match, not } from "@ember/object/computed";

export default Controller.extend({
  responseMessage: "",
  emailAddress: "",
  headerMessage: "Coming Soon",

  isValid: match("emailAddress", /^.+@.+\..+$/),
  isDisabled: not("isValid"),

  actions: {
    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get("emailAddress")}`);
      this.set("responseMessage", `Thank you! We've saved your email address: ${this.get('emailAddress')}`);
      this.set("emailAddress", " "); 
    },
    sendMessage() {
      alert(`Saving of the message from ${this.get("emailAddress")} is in progress.`);
      this.set("contactResponseMessage", `Thank you! We've sent your message ${this.get('textContent')} from ${this.get('emailAddress')}.`);
      this.set("emailAddress", " ");
      this.set("textContent", " "); 
    }
  }
});