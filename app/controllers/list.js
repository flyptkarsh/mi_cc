import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingListModal: false,
  isShowingItemModal: false,
  actions: {

    createList: function() {
      var list = this.store.createRecord('list', { title: '', description: ''});
      var item = this.store.createRecord('item', { title: '', description: '', list: list});
      isShowingListModal: false;
      isShowingItemModal: false;
    },
    createListItem: function(list) {
      this.store.createRecord('item', { title: '', description: '', list: list});
    },
    deleteList: function(list) {
      confirm("Are you sure you want to delete this list?");
      list.deleteRecord();
      item.destroyRecord();

    },
    toggleListModal: function() {
      this.toggleProperty('isShowingListModal');
    },
    toggleItemModal: function() {
      this.toggleProperty('isShowingItemModal');
    }
   }

});
