// Complete the largestRectangle function below.
function largestRectangle(h) {
  if (h.length == 1) {
    return h[0];
  }
  return findLargestArea(h);
}

function findLargestArea(h) {
  let positions = [0];
  let height = [h[0]];
  let maxArea = 0;
  let i = 1;
  for (i = 1; i < h.length; i++) {
    let currentElem = h[i];
    if (currentElem >= height[height.length - 1]) {
      positions.push(i);
      height.push(currentElem);
    } else if (currentElem < height[height.length - 1]) {
      //   let hPop = height.pop();
      //   let pPop = positions.pop();
      while (currentElem < height[height.length - 1] && height.length > 0) {
        hPop = height.pop();
        pPop = positions.pop();
        let area = hPop * (i - pPop);
        maxArea = Math.max(maxArea, area);
      }
      height.push(currentElem);
      positions.push(pPop);
    }
  }
  while (height.length) {
    hPop = height.pop();
    pPop = positions.pop();
    let area = hPop * (i - pPop);
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
}

//   h = [3, 2, 2, 3];
//   h = [1, 2, 3, 4, 5];
//   h = [1, 3, 5, 9, 11];
//   h = [8979, 4570, 6436, 5083, 7780, 3269, 5400, 7579, 2324, 2116];
