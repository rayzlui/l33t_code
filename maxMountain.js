//From 852 of LeetCode

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let max = Math.max(...A)
    return A.indexOf(max)
};