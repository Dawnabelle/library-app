import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  isValid: notEmpty("email")
});
