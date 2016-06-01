import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    createList: function() {
      var list = this.store.createRecord('list', { title: '', description: ''});
      var item = this.store.createRecord('item', { title: '', description: '', list: list});
    },
    createListItem: function(list) {
      this.store.createRecord('item', { title: '', description: '', list: list});
    },
    deleteListItem: function(item) {
      confirm("Are you sure you want to delete this item?");
      item.deleteRecord();
      item.destroyRecord();
    },
    deleteList: function(list) {
      confirm("Are you sure you want to delete this list?");
      list.deleteRecord();
      item.destroyRecord();

    }


   }

});
