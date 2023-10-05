function isInside(polygon, point) {
  var x = point[0],
    y = point[1];
  var inside = false;
  for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    var xi = polygon[i][0],
      yi = polygon[i][1];
    var xj = polygon[j][0],
      yj = polygon[j][1];
    var intersect =
      yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

var polygon = [
  [-73.94198539515685, 40.70877620839181],
  [-73.9607867986749, 40.71563409417257],
  [-73.94987334037704, 40.69118982929851],
  [-73.9379677495064, 40.683290534088655],
  [-73.90473130832662, 40.69006141588025],
  [-73.89381785002874, 40.71713806359506],
  [-73.92903855635365, 40.725785228416726],
  [-73.94198539515685, 40.70877620839181],
];
var point = [-73.92457395977725, 40.70585746477175];
//console.log(pointInPolygon([-73.92457395977725, 40.70585746477175], polygon)); // true
console.log(isInside(polygon, point));
