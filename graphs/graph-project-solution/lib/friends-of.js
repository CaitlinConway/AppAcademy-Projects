/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 */

function friendHelper(adjacencyList, name, visited, distance, currDistance) {
  if (currDistance >= distance) return;
  visited.add(name);
  for (let nextFriend in adjacencyList[name]) {
    friendHelper(adjacencyList, nextFriend, visited, distance, currDistance + 1)
  }
}

function friendsOf(adjacencyList, name, distance) {
  if (name in adjacencyList) {
    let visited = new Set();
    for (let neighbors in adjacencyList[name]) {
      friendsOf(adjacencyList, neighbors, visited, distance, 0);
    }
    visited.delete(name);
    return Array.from(visited);
  }
}

/******************************************************************************
 * Do not change code beneath this line.
 */
try {
  exports.friendsOf = friendsOf;
} catch (e) {
  exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}
