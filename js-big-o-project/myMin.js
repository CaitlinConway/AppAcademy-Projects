// THIS PROJECT FIRSWT


// my_min
// Given a list of integers find the smallest number in the list.

// Phase I
// First, write a function that compares each element to every other element of the list.
//Return the element if all other elements in the array are larger.
// What is the time complexity for this function?


// Phase II
// Now rewrite the function to iterate through the list just once while keeping track of the minimum.What is the time complexity ?

function myMin(array) {
  let min = 0;
  for (let i = 0; i < array.length; ++i) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
