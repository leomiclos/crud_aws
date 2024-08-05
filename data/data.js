// data.js
class DataStore {
    constructor() {
      this.data = [];
    }
  
    getAll() {
      return this.data;
    }
  
    add(item) {
      this.data.push(item);
    }
  
    update(id, updatedItem) {
      const index = this.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.data[index] = updatedItem;
      }
    }
  
    remove(id) {
      const index = this.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    }
  
    reset() {
      this.data = [];
    }
  }
  
  const dataStore = new DataStore();
  module.exports = dataStore;
  