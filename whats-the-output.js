const object1 = {
    prop1: "value1",
    prop2: {
      prop3: "value3",
    },
  };
const newObj = { ...object1 };
newObj.prop2.prop3 = "newValue3";
console.log(object1.prop2.prop3);


const testArray = [1, 2, 3, 4, 5];
const res = testArray.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
	  return accumulator + currentValue;
  }
  return accumulator;
}, 0);
console.log(res);


const person = {
    firstName: "Helen",
    lastName: "Ryan",
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
console.log(person.getFullName());


const array = [10, 20, 30, 40];
const result = array.map((num) => num / 2).filter((num) => num >= 15);
console.log(result);


console.log(3 + "5");
setTimeout(function(){console.log(3 - "5")}, 1000);
setTimeout(function(){console.log(3 * "5")}, 0);
console.log("Bottom log");


let x = { a: 1, b: 2 };
let y = Object.keys(x);
console.log(y.length);