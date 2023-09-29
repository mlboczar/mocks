//Write a function that finds the factorial of a given number
//A factorial is a number multiplied by n-1 of itself until you reach one
//For example:
//The factorial of 3 = 3 * 2 * 1 = 6
//The factorial of 5 = 5 * 4 * 3 * 2 * 1 = 120
//In math you'll see this written as 3!, but we can't use that in JS because our ! already does something else

function findFactorial(num) {
  if (num === 0 || num === 1) {
return 1
  } else {
    return num * findFactorial(num - 1)
  }
}

console.log(findFactorial(5))