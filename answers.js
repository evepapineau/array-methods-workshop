//Write a function called printPositives that takes an array and uses the 
//forEach method to print only the positive numbers.var numbers = [0, -4, 6, 8, -10];
var numbers = [1,-4, 8 ,-5, 9];

function printPositive (number) {
    if (number > 0) {
        console.log(number);
    }
}

var onlyPositive = numbers.forEach(printPositive);
console.log(onlyPositive);

//Similar to the previous exercise, write a function called getPositives that takes 
//an array and uses the filter method to return a new array with only the positive numbers.

function getPositive (number) {
    return number > 0;
}

var positiveFilter = numbers.filter(getPositive);
console.log(positiveFilter);

//Re-do exercise 1 by first filtering the input array, and then printing the numbers 
//from the filtered array. Your code will look something like: return arr.filter(...).forEach(...).

function secondB (array) {
    array.filter(getPositive).forEach(function(num) {
        console.log(num);
    });
}

console.log(secondB(numbers));


                  