//From 1774 in LeetCode

/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */

function binarySearch(arr, target){
  let left = 0
  let right = arr.length-1
  while(left+1 < right){
      let mid = Math.floor((right+left)/2)
      let val = arr[mid]/1
      if (val > target){
          right = mid
      }else{
          left = mid
      }
  }
  return Math.abs(target-arr[left]) <= Math.abs(target - arr[right]) ? arr[left]/1 : arr[right]/1
}



function closestCost(baseCosts,toppingCosts,target){
  //all possible combinations of toppingCosts with 1 or 2 of the topping + a baseCost or no toppings
  let allToppingNoCombos = toppingCosts.reduce((acc,curr) => {
     
      let double = curr * 2
      let nextToppings = {}
      nextToppings[curr] = true
      nextToppings[double] = true
      for (let x in acc){
          let num = x/1
          nextToppings[double +num] = true
          nextToppings[curr+num]= true
          
      }
      return Object.assign(acc,nextToppings)
  },{})
  let allToppingCombos = Object.keys(allToppingNoCombos)
  let result = baseCosts[0]
  for (let i = 0 ; i < baseCosts.length; i++){
      let iceCream = baseCosts[i]
      
      let difference = target - iceCream
      if (difference === 0){
          return iceCream
      }
      if (Math.abs(result - target) > Math.abs(difference)){
          result = iceCream
      }else if (Math.abs(result - target) === Math.abs(difference)){
          result = Math.min(result, iceCream)
      }
      if (allToppingNoCombos[difference]){
          return target
      }
      if(difference > 0){
          
          let findClosestTopping = binarySearch(allToppingCombos, difference)
          
          if (findClosestTopping === difference){
              return (findClosestTopping + iceCream)
          }else{
              if (Math.abs(result - target) > Math.abs(findClosestTopping-difference)){
                  result = iceCream + findClosestTopping
              }else if (Math.abs(result - target) === Math.abs(difference - findClosestTopping)){
                  result = Math.min(result, findClosestTopping + iceCream)
              }
          }
          
      }
      
  }
  
  
  
  return result
}



//faster
/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */

function closestCost(baseCosts,toppingCosts,target){
    //all possible combinations of toppingCosts with 1 or 2 of the topping + a baseCost or no toppings
    let allToppingCombos = toppingCosts.reduce((acc,curr) => {
       
        let double = curr * 2
        let nextToppings = [curr, double]
        acc.forEach(x=>{
            nextToppings.push(curr+x)
            nextToppings.push(x + double)
            
        })
        return acc.concat(nextToppings)
    },[])
    let result = baseCosts[0]
    baseCosts.forEach(iceCream => {
        let difference = target - iceCream
        if (Math.abs(result - target) > Math.abs(difference)){
            result = iceCream
        }else if (Math.abs(result - target) === Math.abs(difference)){
            result = Math.min(result, iceCream)
        }
        allToppingCombos.forEach(toppingCombo => {
            let withTopping = difference - toppingCombo
            if (Math.abs(result - target) > Math.abs(withTopping)){
                result = iceCream + toppingCombo
            }else if (Math.abs(result - target) === Math.abs(withTopping)){
                result = Math.min(result,iceCream + toppingCombo)
            }
        })
    })
    
    
    
    return result
}