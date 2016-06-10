'use strict';
module.exports = function() {

  var vault = {

    setValue: function (key, value) {
      vault.key = value;
    },

    getValue: function (key){
      if (vault.hasOwnProperty('key')){
        return value;
      } else {
        return null;
      }
    }
  };
  return vault;
};