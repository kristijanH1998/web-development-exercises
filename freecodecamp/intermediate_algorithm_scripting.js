//Sum All Numbers in a Range
//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
function sumAll(arr) {
    let highest = arr[0] > arr[1] ? arr[0] : arr[1];
    let lowest = arr[0] < arr[1] ? arr[0] : arr[1];
    let sum = 0;
    while(highest >= lowest) {
      sum += highest;
      highest--;
    }
    return sum;
  }
  
  console.log(sumAll([10, 5]));

// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.
function diffArray(arr1, arr2) {
    const newArr = [];
    // let largerLength = arr1.length > arr2.length ? arr1.length : arr2.length;
    // for(let i = 0; i < largerLength; i++){
      
    // }
    arr1.forEach(item => {
      if(!arr2.includes(item)){
        newArr.push(item);
      } else {
        arr2.splice(arr2.indexOf(item), 1);
      }
    });
    arr2.forEach(item => newArr.push(item));
    return newArr;
  }
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

//Seek and Destroy
//You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.

function destroyer(arr, ...args) {
    let tempArr = [];
    for(let element of arr) {
      if(!args.includes(element)) {
        tempArr.push(element);
      }
    }
    arr = tempArr;
    return arr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
  console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
  console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));