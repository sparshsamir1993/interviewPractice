/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  //   height = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0];
  let tankStartFront = false;
  let tankStartRear = false;
  let front = (rear = -1);
  for (let i = 0; i < height.length; i++) {
    if (
      !tankStartFront &&
      height[i + 1] != undefined &&
      height[i] > 0 &&
      height[i + 1] < height[i]
    ) {
      tankStartFront = true;
      front = i;
    }
  }
  for (let i = height.length - 1; i >= 0; i--) {
    if (
      !tankStartRear &&
      height[i - 1] != undefined &&
      height[i] > 0 &&
      height[i - 1] < height[i]
    ) {
      tankStartRear = true;
      rear = i;
    }
  }

  let totalWater = 0;
  let arrMax = { id: -1, max: 0 };
  if (front < rear) {
    for (let i = 0; i < height.length; i++) {
      if (height[i] > arrMax.max) {
        arrMax.max = height[i];
        arrMax.id = i;
      }
    }
    let lastMaxStart = { id: front, height: height[front] };
    let lastMaxRear = { id: rear, height: height[rear] };
    let blocksFront = 0;
    let blocksRear = 0;

    for (let i = front + 1; i <= arrMax.id; i++) {
      if (height[i] >= lastMaxStart.height) {
        let collection =
          lastMaxStart.height * (i - lastMaxStart.id - 1) - blocksFront;
        totalWater += collection;
        lastMaxStart.id = i;
        lastMaxStart.height = height[i];
        blocksFront = 0;
      } else if (height[i] < lastMaxStart.height) {
        blocksFront = blocksFront + height[i];
      }
      //   if (height[j] >= lastMaxRear.height) {
      //     let collection =
      //       lastMaxRear.height * (lastMaxRear.id - j - 1) - blocksRear;
      //     totalWater += collection;
      //     lastMaxRear.id = j;
      //     lastMaxRear.height = height[j];
      //     blocksRear = 0;
      //   } else if (height[i] < lastMaxRear.height) {
      //     blocksRear = blocksRear + height[j];
      //   } else if ((height[i] = lastMaxRear.height)) {
      //   }
    }
    for (let j = rear - 1; j >= arrMax.id; j--) {
      if (height[j] >= lastMaxRear.height) {
        let collection =
          lastMaxRear.height * (lastMaxRear.id - j - 1) - blocksRear;
        totalWater += collection;
        lastMaxRear.id = j;
        lastMaxRear.height = height[j];
        blocksRear = 0;
      } else if (height[j] < lastMaxRear.height) {
        blocksRear = blocksRear + height[j];
      } else if ((height[j] = lastMaxRear.height)) {
      }
    }
  }
  console.log(front, rear, totalWater);
};
