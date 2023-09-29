//Create a function that, given a number, will return the number in Roman numerals
//I've created a object for you with some Roman numerals you can use
const numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};


function romanNumeralConverter(num) {
    let romanNumeralString = ""
    let remainingValue = num

    for (let i = 0; i < Object.keys(numerals).length; i++) {
        while (remainingValue - Object.values(numerals)[i] >= 0) {
            romanNumeralString += Object.keys(numerals)[i]
            remainingValue -= Object.values(numerals)[i]
        }
    }
    return romanNumeralString
}
console.log(romanNumeralConverter(18))


function integerToRoman(num) {  
    let result = ''
    for (let key in numerals) {
        while (num >= numerals[key]) {
            result += key
            num -= numerals[key]
        }
    }
    return result
}
console.log(integerToRoman(114))