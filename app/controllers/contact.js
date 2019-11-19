import Controller from "@ember/controller";
import { match, not, and } from "@ember/object/computed";

export default Controller.extend({
  contactHeader: "Contact Us",
  contactResponseMessage: "",
  emailAddress: "",
  textContent: "",

  isValidEmail: match("emailAddress", /^.+@.+\..+$/),
  isValidMessage: match("contactText", /^\w+$/),
  isBothTrue: and("emailAddress", "contactText"),
  isDisabled: not("isBothTrue"),

  actions: {
    sendMessage() {
      alert(`Saving your message ${this.get("contactText")} from ${this.get("emailAddress")}.`);
      this.set("contactResponseMessage", `Thank you! We've sent your message from ${this.get('emailAddress')}.`);
      this.set("emailAddress", " ");
      this.set("contactText", " "); 
    }
  }
});
