/**
 * Datasource.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name : {
      type: 'string'
    },
    descripttion:{
      type: 'string'
    },
    schema: {
      type: 'json'
    },
    form: {
      type: 'json'
    },
    records : {
      collection: 'record',
      via: 'datasource'
    }
  }
};
