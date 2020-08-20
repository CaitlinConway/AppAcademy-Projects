function reverseString(string) {
  let array = string.split("");
  let length = array.length;
  let newArray = [];
  for (let i = 0; i < length; i++) {
    newArray.push(array.pop());

  }
  return newArray.join('');
}



module.exports = reverseString;
