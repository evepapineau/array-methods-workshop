//Write a function called printPositives that takes an array and uses the 
//forEach method to print only the positive numbers.var numbers = [0, -4, 6, 8, -10];
var numbers = [1,-4, 8 ,-5, 9];

function printPositive (array) {
    array.forEach(function(number) {
        if (number >=0 ) {
            console.log(number)
        }
    }
}

var positiveArray = printPositive(numbers)
console.log(positiveArray);

//Similar to the previous exercise, write a function called getPositives that takes 
//an array and uses the filter method to return a new array with only the positive numbers.

var numbers = [1,-4, 8 ,-5, 9];

function getPositive (array) {
    var newArray = [];
    array.filter(function(number) {
        if (number >= 0) {
            newArray.push(number);
        }
    });
    return newArray;
}
                   
var positiveArray2 = getPositive(numbers);
console.log(positiveArray2);*/

//Re-do exercise 1 by first filtering the input array, and then printing the numbers 
//from the filtered array. Your code will look something like: return arr.filter(...).forEach(...).

function secondB (array) {
    array.filter(getPositive).forEach(function(num) {
        console.log(num);
    });
}

console.log(secondB(numbers));


                  