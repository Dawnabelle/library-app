import Controller from "@ember/controller";
import { match, not, and, gte } from "@ember/object/computed";

export default Controller.extend({
  contactHeader: "Contact Us",
  contactResponseMessage: "",
  email: "",
  message: "",

  isValidEmail: match("email", /^.+@.+\..+$/),
  isMessageLongEnough: gte("message", /^\w+$/),

  isValid: and("isValidEmail", "isMessageLongEnough"),
  isDisabled: not("isValid"),

  actions: {
    sendMessage() {
      alert(`Saving your message ${this.get("message")} from ${this.get("email")}.`);
      this.set("contactResponseMessage", `Thank you! We've sent your message from ${this.get('emailAddress')}.`);
      this.set("email", " ");
      this.set("message", " "); 
    }
  }
});
