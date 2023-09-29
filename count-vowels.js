//Write a function that will take a string and return the number of vowels in that string

function countVowels(str) {
    const vowels = "aeiou"
    let count = 0
    let lowerStr = str.toLowerCase()

    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++
        }
    }
    return count
}

const input = "HEllo, World!"
console.log(countVowels(input))


//Using a regex
function countVowelsRegex(str) {
    const vowelRegex = /[aeiouAEIOU]/g
    const matches = str.match(vowelRegex)
    return matches.length
}
console.log(countVowelsRegex(input))