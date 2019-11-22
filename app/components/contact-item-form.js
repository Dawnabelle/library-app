import Component from '@ember/component';

export default Component.extend({
  buttonLabel: "Send Message",

  actions: {
    buttonClicked(param) {
      this.sendAction("action", param);
    }
  }
});
