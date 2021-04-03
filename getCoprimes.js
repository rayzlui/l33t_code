//From 1766 in LeetCode
/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number[]}
 */

function gcd(a,b){
  if (a===b){
      return a
  }
  let nums = a > b ? [b,a] : [a,b]
  let smaller = nums[0]
  let larger = nums[1]
  
  while (smaller !== 0 && larger!==0){
      let remainder = larger % smaller
      larger = smaller
      smaller = remainder
  }
  return larger
}
function getCoprimes(nums, connections) {
  if (connections.length === 0){
      return [-1]
  }
  
  let edges = connections.reduce((acc,curr) => {
      let parent = curr[0]
      let offspring = curr[1]
      if (acc[parent]){
         acc[parent].push(offspring)
      }else{
          acc[parent] = [offspring]
      }
      if (acc[offspring]){
          acc[offspring].push(parent)
      }else{
          acc[offspring] = [parent]
      }
      
      return acc
  },{})
  let seen = {}
  let alreadyGCD = {}
  let result = new Array(nums.length)
  function dfs(node, stack){
      let valueAtNode = nums[node]
      let ancestor = -1
      for (let compareNode of stack){
          let valueAtCompare = compareNode[0]
          if(alreadyGCD[`${valueAtNode},${valueAtCompare}`]){
              ancestor = compareNode[1]
          }else if (alreadyGCD[`${valueAtCompare},${valueAtNode}`] === false){
              continue
          }else{
              if (gcd(valueAtNode, valueAtCompare) === 1){
                  ancestor = compareNode[1]
                  alreadyGCD[`${valueAtNode},${valueAtCompare}`] = true
                  alreadyGCD[`${valueAtCompare},${valueAtNode}`] = true
              
              }else{
                  alreadyGCD[`${valueAtNode},${valueAtCompare}`] = false
                  alreadyGCD[`${valueAtCompare},${valueAtNode}`] = false
              }
          }
      }
      result[node] = ancestor
      seen[node] = true
      let links = edges[node]
      let nextMap = new Map(stack)
      if (nextMap.has(nums[node])){
          nextMap.delete(nums[node])  
      }
      
      nextMap.set(nums[node], node)  
      for (let i = 0; i < links.length; i++){
          let nextNode = links[i]
          if (seen[nextNode] === undefined){
              dfs(nextNode,nextMap)
          }
      }
      delete nextMap
  }
  dfs(0,new Map())
  
  return result
};