import Controller from "@ember/controller";
import { match, not, and, gte } from "@ember/object/computed";

export default Controller.extend({
  contactHeader: "Contact Us",
  contactResponseMessage: "",
  contactEmail: "",
  contactMessage: "",

  isValidEmail: match("contactEmail", /^.+@.+\..+$/),
  isMessageLongEnough: gte("contactMessage", /^\w+$/),

  isValid: and("isValidEmail", "isMessageLongEnough"),
  isDisabled: not("isValid"),

  actions: {
    sendMessage() {
      const emailContact = this.get("contactEmail");
      const messageContact = this.get("contactMessage");

      const saveContact = this.store.createRecord("contact", { emailContact, messageContact });
      saveContact.save().then(response => {
        this.set("contactResponseMessage", `Thank you! We've sent your message from ${response.get('emailAddress')}.`);
        this.set("contactEmail", " ");
        this.set("contactMessage", " "); 
      })
    }
  }
});
