//From 461 in LeetCode

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const bit1 = x.toString(2).split("").reverse()
    const bit2 = y.toString(2).split("").reverse()
    let result = 0
    let longer = bit1.length > bit2.length ? bit1 : bit2
    for (let i = 0; i < longer.length; i ++){
        let for1 = bit1[i]
        let for2 = bit2[i]
        if(for1===undefined){
            for1 = 0
        }
        if(for2===undefined){
            for2= 0
        }
        if (for1/1 !== for2/1){
            result ++
        }
    }
    return result
};