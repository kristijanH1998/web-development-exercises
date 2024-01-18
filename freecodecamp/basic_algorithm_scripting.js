//Code to find a word with max length in a string in JavaScript:
function findLongestWordLength(str) {
    let maxLength = Math.max(...str.split(' ').map((str) => str.length));
    return maxLength;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  
  //Code to find largest number in each subarray of an array in JavaScript:
  function largestOfFour(arr) {
    arr = arr.map(subArr => Math.max(...subArr));
    return arr;
  }
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  //console.log([[1,2],[3,4,6]].map(num => Math.max(...num)));
  
  //Code to reverse a string in JavaScript:
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello"));
  
  //Recursive code to factorialize a number in JavaScript:
  function factorialize(num) {
    return (num <= 1) ? 1 : num * factorialize(num-1);
  }
  console.log(factorialize(6));
  
  //Check if a string (first argument, str) ends with the given target string (second argument, target) (JS):
  function confirmEnding(str, target) {
    return (str.slice(str.length-target.length) === target) ? true : false;
  }
  console.log(confirmEnding("Bastian", "n"));
  
  //Code to repeat a string 'str' 'num' times (JS):
  function repeatStringNumTimes(str, num) {
    return (num <= 0) ? "" : str + repeatStringNumTimes(str, num-1);
  }
  console.log(repeatStringNumTimes("abc", 3));
  
  //Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending:
  function truncateString(str, num) {
    return (num < str.length) ?  str.slice(0, num) + '...' : str;
  }
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  
  //Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
  
  function findElement(arr, func) {
    return arr.find(func);
    // if(arr.find(func)){
    //   return arr.find(func);
    // } else {
    //   return undefined;
    // }
  }
  console.log(findElement([1, 1, 1, 1], num => num % 2 === 0));
  //console.log([1, 2, 3, 4].find(num => num % 2 === 0))
  
  //Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.
  function booWho(bool) {
    return (typeof bool == 'boolean') ? true : false;
  }
  console.log(booWho(null));
  console.log(booWho([1,2,3]));
  console.log(booWho(false));
  
  //Title Case a Sentence: Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
  function titleCase(str) {
    str = str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1, word.length)).join(' ');
    return str;
  }
  
  console.log(titleCase("I'm a little tea pot"));
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
  console.log(titleCase("sHoRt AnD sToUt"));
  
  /* Slice and Splice
  You are given two arrays and an index. Copy each element of the first array into the second array, in order. 
  Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.
  */
  function frankenSplice(arr1, arr2, n) {
    let temp = Array.from(arr2);
    temp.splice(n, 0, ...arr1);
    return temp;
  }
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  console.log(frankenSplice(arr1, arr2, 1));
  console.log(arr1);
  console.log(arr2);
  
  //Falsy Bouncer
  //Remove all falsy values from an array. Return a new array; do not mutate the original array. 
  //Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
  
  function bouncer(arr) {
    let temp = Array.from(arr);   
    for(let i = 0; i < temp.length; i++){ 
      if(Boolean(temp[i]) === false) {
        temp.splice(i, 1);
        i--;
      } else {
        continue;
      }   
    }   
    return temp;
  }   
  console.log(bouncer([7, "ate", "", false, 9]));
  console.log(bouncer([false, null, 0, NaN, undefined, ""]));
  
  //Where do I Belong: Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
  //For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
  //Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
  
  function getIndexToIns(arr, num) {
    if(arr.length == 0){
      return 0;
    }
    arr.sort((a,b) => (a-b));
    console.log(arr);
    var el;
    for(el in arr){
      if(num <= arr[el]){
        return Number(el);
      }
    }
    return Number(el) + 1;
  }
  console.log(getIndexToIns([40, 60], 50));
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
  console.log(getIndexToIns([5, 3, 20, 3], 5));
  
  //Mutations:
  //Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
  //For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
  //The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
  //Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
  
  function mutation(arr) {
    if(arr.length != 2) {
      return "Error. The array must have exactly 2 elements."
    }
    var lowercase = arr[0].toLowerCase();
    for(var letter in arr[1]){
      if(lowercase.includes(arr[1][letter].toLowerCase())){
        continue;
      } else {
        return false;
      }
      // if(arr[1].split('').find(char => char === 'e')){
      //   continue;
      // }
    }
    return true;
  }
  console.log(mutation(["hello", "hey"]));
  //console.log('hello'.split('').find(char => char === 'e'));
  //console.log('hEllo'.toLowerCase());
  
  //Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
  function chunkArrayInGroups(arr, size) {
    let groups = [];
    for(var i = 0; i < arr.length; i+=size){
      let group = arr.slice(i, i + size);
      groups.push(group);
    }
    return groups;
  }
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));