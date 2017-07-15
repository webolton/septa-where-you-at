function bussesForDirection(route, direction){
  var busses = []
  route['bus'].forEach(function(bus){
    if(bus['Direction'] == direction){
      busses.push(bus)
    };
  });
  return busses
};

module.exports = {
  routeParser: function(route) {
    bussesForDirection(route, 'SouthBound');
  }
}