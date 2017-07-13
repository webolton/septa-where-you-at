var requestify = require('requestify');
module.exports = {

  get47: function(){ requestify.get("http://www3.septa.org/beta/TransitView/47").then(function(response) {
      console.log(response.getBody());
    })
  },

  get45: function(){ requestify.get("http://www3.septa.org/beta/TransitView/45").then(function(response) {
      console.log(response.getBody());
    })
  }

};