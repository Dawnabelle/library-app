import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string')
});

// import Model, { attr } from '@ember-data/model';

// export default Model.extend({
//   email: attr('string')
// });
