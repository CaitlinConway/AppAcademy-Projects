// THIS PROJECT THIRD



// Anagrams
// Our goal today is to write a method that determines if two given words are anagrams.
// This means that the letters in one word can be rearranged to form the other word.
// For example:

// anagram("gizmo", "sally")    # => false
// anagram("elvis", "lives")    # => true
// Assume that there is no whitespace or punctuation in the given strings.

// Phase I:
// Write a method #first_anagram that will generate and store all the possible anagrams of the first string.
// Check if the second string is one of these.

//     Hints:

// For testing your method, start with small input strings, otherwise you might wait a while
// If you're having trouble generating the possible anagrams, look into this method.
// https://medium.com/@lindagmorales94/how-to-solve-a-string-permutation-problem-using-javascript-95ad5c388219
// What is the time complexity of this solution ? What happens if you increase the size of the strings ?

// let angArray = [];
// function swap(array, start, end) {
//   let temp = array[start];
//   array[start] = array[end];
//   array[end] = temp;
// }

// function anagram(array, index) {
//   if (index === array.length - 1) {
//     angArray.push(array.join(""));
//   }
//   for (let i = index; i < array.length; ++i) {
//     swap(array, index, i);
//     anagram(array, index + 1);
//     swap(array, index, i);
//   }
// }

// function toArray(string) {
//   return string.split("");
// }

// let string = ["a", "b", "c"];
// anagram(string, 0);
// console.log(angArray);



//     Phase II:
// Write a method second_anagram that iterates over the first string.
// For each letter in the first string, find the index of that letter in the second string and delete at that index.
// The two strings are anagrams if an index is found for every letter and the second string is empty at the end of the iteration.

// Try varying the length of the input strings.
// What are the differences between first_anagram and second_anagram?







//     Phase III:
// Write a method third_anagram that solves the problem by sorting both strings alphabetically.
// The strings are then anagrams if and only if the sorted versions are the identical.

// What is the time complexity of this solution? Is it better or worse than second_anagram?


// const sanitizeString = function (str) {
//   return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
// }
// function isAnagram(stringA, stringB) {
//   return sanitizeString(stringA) === sanitizeString(stringB);
// }
// console.log(isAnagram("cat", "tac"));
// console.log(isAnagram("dog", "cat"));




//     Phase IV:
// Write one more method fourth_anagram.This time, use two objects to store the number of times each letter appears in both words.
// Compare the resulting objectss.

function objs(str) {
  let obj = {};
  let arr = str.split("").sort();
  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i];
    if (letter in obj) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
}

function compareObjs(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

let string2 = "catttt";
let obj1 = objs(string2);
let obj2 = objs("dog");
let obj3 = objs("ogd");
console.log(obj3);
console.log(obj2);
console.log(compareObjs(obj1, obj2));
console.log(compareObjs(obj3, obj2));

// What is the time complexity ?

//     Bonus : Do it with only one object.

// Discuss the time complexity of your solutions together, then call over your TA to look at them.
