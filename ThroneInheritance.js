//From 1600 in LeetCode

/**
 * @param {string} kingName
 */
class ThroneInheritance {
  constructor(kingName) {
    this.inheritance = {};
    this.inheritance[kingName] = [];
    this.dead = {};
    this.king = kingName;
  }
}

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
  let order = this.inheritance;
  if (order[parentName]) {
    order[parentName].push(childName);
  } else {
    order[parentName] = [childName];
  }
};

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
  this.dead[name] = true;
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
  let line = [];
  let inheritance = this.inheritance;
  let dead = this.dead;
  function getSuccession(person) {
    if (dead[person] === undefined) {
      line.push(person);
    }
    let offspring = inheritance[person];
    if (offspring) {
      for (let i = 0; i < offspring.length; i++) {
        getSuccession(offspring[i]);
      }
    }
  }
  getSuccession(this.king);
  return line;
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
