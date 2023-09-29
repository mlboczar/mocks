//Move the 0s

// Write a function that takes an array as an argument
// The function should take any 0s that occur in the array
// and move them to the end of the array

// Example:
// Input = [6, 0, 8, 4, 0]
// Output = [6, 8, 4, 0, 0]

function moveZerosNewArray(arr) {
    let newArray = []
    let zeroCounter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArray.push(arr[i])
        } else {
         zeroCounter++
        }
    }
    for (let j = 0; j < zeroCounter; j++) {
        newArray.push(0)
    }
    return newArray
}
console.log(moveZerosNewArray([6,0,8,0,4]))


//This function modifies the original array instead of creating a new one
function moveZerosModifyingOriginalArray(arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            arr[i] = arr[j];
            i++;
        }
    }
    for (let k = i; k < arr.length; k++) {
        arr[k] = 0;
    }
    return arr
}
console.log(moveZerosModifyingOriginalArray([6,0,8,0,4]))

//This function only has one for loop!
function moveZerosOneLoop(arr) {
    let allTheZeros = []
    let allTheNonZeros = []

    for (let num of arr) {
        if (num === 0) {
            allTheZeros.push(0)
        } else {
            allTheNonZeros.push(num)
        }
    }
    return allTheNonZeros.concat(allTheZeros)
}
console.log(moveZerosOneLoop([6,0,8,0,4]))