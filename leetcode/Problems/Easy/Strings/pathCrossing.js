/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let x = 0,
    y = 0;
  let visitedPoints = new Set();
  visitedPoints.add(`${x},${y}`);
  for (let i = 0; i < path.length; i++) {
    if (path[i] == "N") {
      y++;
    } else if (path[i] == "S") {
      y--;
    } else if (path[i] == "E") {
      x++;
    } else if (path[i] == "W") {
      x--;
    }
    if (visitedPoints.has(`${x},${y}`)) return true;
    visitedPoints.add(`${x},${y}`);
  }
  return false;
};
