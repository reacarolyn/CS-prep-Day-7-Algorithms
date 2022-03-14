////////////////////////////
//     Challenge 1
////////////////////////////
//Recursion (breaking down a problem into sub-problems)
//Modify the function so that it returns the product of all the elements in the array

function product(arr, i=0) {
  if (i === arr.length - 1) return arr[i];
 return arr[i]*product(arr, i+1)// insert recursive case here!
  // let product =1;
  // for(let i =0; i<arr.length; i++){
  //   product = product*arr[i];
  // }
  // return product;
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(product([1, 2, 3, 4])); // -> 24
// console.log(product([1, 2, 3, 4, 5])); // -> 120
// console.log(product([4, 5, 6])); // -> 120

////////////////////////////
//     Challenge 2
////////////////////////////
//Caching - keeping track of values you've already come across
function containsDuplicates(arr) {
  let cache = {}
  for (let elem of arr) {
    if (cache[elem]) return true;
    else {
      cache[elem] = 'present';
    }
  }
  return false;
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(containsDuplicates([1, 2, 3, 4, 5, 6])); // -> false
console.log(containsDuplicates([1, 2, 3, 4, 5, 6, 3])); // -> true
console.log(containsDuplicates([])); // -> false


////////////////////////////
//     Challenge 3
////////////////////////////
//Memoization - keeping track of values you've already computed
function createFib() {
  let memo = {}

  function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    // add another base case;
    if (memo[n]) return memo[n];
    let fibn = fib(n-1) + fib(n-2);
    // what should we do with fibn
    memo[n] = fibn;
    console.log(fibn)
    return fibn
  }

  return fib
}


const memoFib = createFib();

// To check if you've completed the challenge, uncomment these console.logs!
console.log(memoFib(0)); // -> 0
console.log(memoFib(5)); // -> 5
console.log(memoFib(37)); // -> 24157817

console.log(memoFib(45)); // only uncomment if you're sure that memoization is working!



////////////////////////////
//     Challenge 4
////////////////////////////
//Don't compute too many things! What can we do to this array to make this problem easier?

//Find the smallest difference between any two numbers in an array
function smallestDiff(arr) {
	let newArr = arr.sort((a, b) => a - b); 	// sort arr so it's easier to compare elems
  let diffArr = []; //empty arrays where differences will be stored
  for (let i = 1; i < newArr.length; i++) {	// look through sorted array
    diffArr.push(newArr[i] - newArr[i - 1]); // find each difference combinations
  }
  return Math.min(...diffArr); // return the smallest difference
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(smallestDiff([4, 1, 3])); // -> 1
console.log(smallestDiff([10, 20, 30, 40, 50, 60])); // -> 10
console.log(smallestDiff([1, 2, 3, 4, 5, 6, 7])); // -> 1


////////////////////////////
//     Challenge 5
// Balancing Parenthesis using stack
////////////////////////////
/*
Use data structures - Stack!
check to see if a string contains balanced parentheses
This means that every open parenthesis must be matched with one closed one
Ex: '()' is balanced
Ex: ')(' is NOT balanced , closed parenthesis must come after its match
Ex: '(()(()))' is balanced
Ex: '((()' is NOT balanced
*/
function balancedParens(str) {
  let stack = [];
  let parensArray = str.split('');
  if (parensArray[0] === ')') {
   return false;} // false if started with closing parenthesis
      for (let i = 0; i < parensArray.length; i ++) {
      // what should this for loop do?
      if(parensArray[i]==='(') {
        stack.push(parensArray[i]);
      } 
      else if (parensArray[i]===')') {
        stack.pop();
     } else return false;
  }
  return stack.length === 0;// this is true if all openning has closing parenthesis
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(balancedParens('()')); // -> true
console.log(balancedParens(')(')); // -> false
console.log(balancedParens('(()(()))')); // -> true
console.log(balancedParens(')')); // -> false






