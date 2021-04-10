//From 1577 in LeetCode

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function numTriplets(nums1, nums2) {
  let nums1Products = {};
  let nums2Products = {};
  let copy1 = nums1.slice(1);
  let copy2 = nums2.slice(1);
  let result = 0;
  nums1.forEach(x => {
    copy1.forEach(y => {
      let product = x * y;
      if (nums1Products[product]) {
        nums1Products[product]++;
      } else {
        nums1Products[product] = 1;
      }
    });
    copy1.shift();
  });
  nums2.forEach(x => {
    copy2.forEach(y => {
      let product = x * y;
      if (nums2Products[product]) {
        nums2Products[product]++;
      } else {
        nums2Products[product] = 1;
      }
    });
    copy2.shift();
    if (nums1Products[x * x]) {
      result += nums1Products[x * x];
    }
  });
  nums1.forEach(x => {
    if (nums2Products[x * x]) {
      result += nums2Products[x * x];
    }
  });
  return result;
}

//faster

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function numTripletsII(nums1, nums2) {
  let nums1Products = {};
  let nums2Products = {};
  let copy1 = nums1.slice(1);
  let copy2 = nums2.slice(1);
  let result = 0;
  nums1.forEach(x => {
    copy1.forEach(y => {
      let product = x * y;
      if (nums1Products[product]) {
        nums1Products[product]++;
      } else {
        nums1Products[product] = 1;
      }
    });
    if (nums2Products[x * x]) {
      nums2Products[x * x]++;
    } else {
      nums2Products[x * x] = 1;
    }
    copy1.shift();
  });
  nums2.forEach(x => {
    copy2.forEach(y => {
      let product = x * y;
      if (nums2Products[product]) {
        result += nums2Products[product];
      }
    });
    copy2.shift();
    if (nums1Products[x * x]) {
      result += nums1Products[x * x];
    }
  });
  return result;
}
