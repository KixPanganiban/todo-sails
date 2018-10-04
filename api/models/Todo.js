/**
 * Todo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    title: 'string',
    order: 'number',
    completed: 'boolean',
  },
  customToJSON: function() {
    this.url = `https://todo-sails.herokuapp.com/todo/${this.id}/`;
    return this;
  }
};

sails.config.models.migrate = 'drop';