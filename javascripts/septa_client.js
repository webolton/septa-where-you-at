var requestify = require('requestify');
module.exports = {

  getRouteInfo: function(routeId){
     requestify.get(`http://www3.septa.org/beta/TransitView/${routeId}`).then(function(response) {
      console.log(response.getBody());
    })
  }

};