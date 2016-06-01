import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
     controller.set('model', model);
   },
  model( ) {
     return this.store.findAll('list')
  }
});
