//Create a function to find the leap years in a range, given the start year and end year
//Remember that a leap year is every 4 years, on years that are divisible by 4

//All-in-one solution
function findLeapYears(startYear, endYear) {
    let leapYears = []
    for (let i = startYear; i <= endYear; i++) {
        if (i % 4 === 0) {
            leapYears.push(i)
        }
    } 
    return leapYears
}
console.log(findLeapYears(2000,2012))



// Using a helper function
function leapYearRange(startYear, endYear) {
    const yearRange = [];
    for (let i = startYear; i <= endYear; i++) {
        yearRange.push(i);
    }
    const newArray = [];
    yearRange.forEach(year => { 
        if (isLeapYear(year)) 
         newArray.push(year);
    });
    return newArray;
}
  
function isLeapYear(year) {
    if (year % 4 === 0) {
        return year;
    } else {
        return false;
    }
}
console.log(leapYearRange(2000,2012));