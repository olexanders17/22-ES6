/*
 1)
 - you have an array - [1,2,5,12,55,36,24,77]
 - write an function that will converts array into array that consists only of even items
 - write an function that will take array and returns the sum of elements
 - for the first function use the "map" function
 - in the second function do NOT use any of for/foreach
 - write all your code in es6 syntax*/

"use strict";
const arr = [1, 2, 5, 12, 55, 36, 24, 77];
function evenArray(arr) {
    const rezArr = arr.map((el)=> {

        if ((el % 2) == 0) {
            return el;
        }

    });

    for (let i = 0; i < rezArr.length; i++) {
        if (typeof rezArr[i] == "undefined") {
            rezArr.splice(i, 1);
        }

    }
    return rezArr;
}


console.log('evenArray', evenArray(arr));

function sumOfArray(arr) {
    let sum = 0;
    arr.map((el)=> {
        sum += el
    });
    return sum;
}

console.log('sumOfArray:', sumOfArray(arr));


/*
 2.
 - you have an objects in array - [{id:5, name:"jozef", age:55}, {id:5, name:"andrew", age:25}, ...]
 - write an function that will converts object into - {"jozef":55, "andrew":25, ...}
 - write an function that can converts object into avg age - (55+25+...)/count-of-items
 - in the second function do NOT use any of for/foreach
 - write all your code in es6 syntax*/


const arr2 = [{id: 5, name: "jozef", age: 55}, {id: 5, name: "andrew", age: 25}];

function objectConverter(arr) {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        let {name}=arr[i];

        result[name] = arr[i].age
    }

    return result;
}

console.log('objectConverter: ', objectConverter(arr2));

function avgAge(arr) {

    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let {age}=arr[i];
        result += age;
    }

    return result / arr.length;
}


console.log('avgAge : ', avgAge(arr2));