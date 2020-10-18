/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeSort = function (nums1, m, nums2, n) {
  //   (nums1 = [1, 2, 3, 0, 0, 0]), (m = 3);
  //   (nums2 = [2, 5, 6]), (n = 3);
  (nums1 = [2, 0]), (m = 1);
  (nums2 = [1]), (n = 1);
  if (n == 0) return nums1;
  let nums1Copy = [...nums1];
  let i = 0,
    j = 0,
    k = 0;
  for (; i < m; ) {
    if (j == m) break;
    if (nums1Copy[i] < nums2[j]) {
      nums1[k] = nums1Copy[i];
      i++;
      k++;
    } else {
      nums1[k] = nums2[j];
      j++;
      k++;
    }
  }
  while (i < m) {
    nums1[k] = nums1Copy[i];
    i++;
    k++;
  }
  while (j < n) {
    nums1[k] = nums2[j];
    j++;
    k++;
  }
};
