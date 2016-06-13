var shortid = require('shortid');

module.exports = {
  identity: 'groups',
  connection: 'theDB',
  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
      defaultsTo: function() {
        return shortid.generate();
      }
    },
    name: {
      type : 'string',
      required : true
    }
  }
};