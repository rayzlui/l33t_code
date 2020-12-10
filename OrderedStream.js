//From 1656 in LeetCode

/**
 * @param {number} n
 */
class OrderedStream {
  constructor(n) {
    this.stream = {};
    this.ptr = 1;
  }

  insert(id, value) {
    this.stream[id] = value;
    let contig = [];
    let start = this.ptr;
    while (this.stream[start] !== undefined) {
      contig.push(this.stream[start]);
      start++;
    }
    this.ptr = start;
    return contig;
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */
