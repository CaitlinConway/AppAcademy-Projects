function breadthFirstSearch(startingNode, targetVal) {
  let stack = [startingNode];
  let visited = new Set();
  while (stack.length) {
    let node = stack.shift();
    if (visited.has(node)) {
      continue;
    }
    visited.add(node);
    if (node.val === targetVal) return true;
    stack.push(...node.neighbors);
  }
  return null;
}

module.exports = {
  breadthFirstSearch
};
