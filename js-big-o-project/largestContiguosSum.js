// THIS PROJECT SECOND



//     Largest Contiguous Sub - sum
// You have an array of integers and you want to find the largest contiguous(together in sequence) sub - sum.
// Find the sums of all contiguous sub - arrays and return the max.

//     Example:

// list = [5, 3, -7]
// largest_contiguous_subsum(list) # => 8

//     # possible sub - sums
// [5]           # => 5
// [5, 3]        # => 8 -- > we want this one
// [5, 3, -7]    # => 1
// [3]           # => 3
// [3, -7]       # => -4
// [-7]          # => -7
// Example 2:

// list = [2, 3, -6, 7, -6, 7]
// largest_contiguous_subsum(list) # => 8(from[7, -6, 7])
// Example 3:

// list = [-5, -1, -3]
// largest_contiguous_subsum(list) # => -1(from[-1])
// Phase I
// Write a function that iterates through the array and finds all sub - arrays using nested loops.First make an array to hold all sub - arrays.Then find the sums of each sub - array and return the max.

function subArray(array) {
  //   if (array.length === 0) {
  //     return;
  //   } else {

  //   }
  let subSubArray = [];
  let subArray = [];
  for (let i = 0; i < array.length; ++i) {
    for (let j = i; j < array.length; ++j) {
      for (let k = j; k < j; ++k) {
        subSubArray.push(array.slice(j, k));
      }
      subArray.push(subSubArray);
      subSubArray = [];
    }
    // subArray.push(subSubArray);
    // subSubArray = [];
  }
  return subArray;
}

function sum(array) {

}
function max(...array) {

}

list = [5, 3, -7];
console.log(subArray(list));

// Discuss the time complexity of this solution.

// Phase II
// Let's make a better version. Write a new function using O(n) time with O(1) memory. Keep a running tally of the largest sum. To accomplish this efficient space complexity, consider using two variables. One variable should track the largest sum so far and another to track the current sum. We'll leave the rest to you.

// Get your story straight, and then explain your solution's time complexity to your TA.



///
/*Solution with time complexity of O(n^3). Cubic Algorithm.
Idea: For all pairs of integers, i ≤ j, check whether the sum of A[i..j] is greater than the maximum sum so far.*/

function findMaxSubArrayBruteForce(arr) {
  var max_so_far = Number.NEGATIVE_INFINITY;
  var leftIndex = 0,
    rightIndex = arr.length - 1,
    len = arr.length;

  for (var i = 0; i < len; i++) {

    for (var j = i; j < len; j++) {
      maxSum = 0;
      for (var k = i; k <= j; k++) {
        maxSum += arr[k];

        if (max_so_far < maxSum) {
          leftIndex = i;
          max_so_far = maxSum;
          rightIndex = j;
        }
      }
    }
  }
  return {
    left: leftIndex,
    right: rightIndex,
    final_max_sum_subArray: max_so_far
  };
}

var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(findMaxSubArrayBruteForce(array));



////////
/*Solution with time complexity of O(n^2). Quadratic Algorithm.
Idea: The sum of A[i..j] can be efficiently calculated as (sum of A[i..j-1]) + A[j].*/

function findMaxSubArrayBruteForce(arr) {
  var max_so_far = Number.NEGATIVE_INFINITY;
  var leftIndex = 0,
    rightIndex = arr.length - 1,
    len = arr.length;

  for (var i = 0; i < len; i++) {
    maxSum = 0;

    for (var j = i; j < len; j++) {
      maxSum += arr[j];

      if (max_so_far < maxSum) {
        leftIndex = i;
        max_so_far = maxSum;
        rightIndex = j;
      }
    }
  }
  return {
    left: leftIndex,
    right: rightIndex,
    final_max_sum_subArray: max_so_far
  };
}

var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(findMaxSubArrayBruteForce(array));
