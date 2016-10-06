//Write a function called printPositives that takes an array and uses the 
//forEach method to print only the positive numbers.var numbers = [0, -4, 6, 8, -10];
/*var numbers = [1,-4, 8 ,-5, 9];

function printPositive (array) {
    array.forEach(function(number) {
        if (number >=0 ) {
            console.log(number)
        }
    }
}

var positiveArray = printPositive(numbers)
console.log(positiveArray);*/

//Similar to the previous exercise, write a function called getPositives that takes 
//an array and uses the filter method to return a new array with only the positive numbers.
var numbers = [1,-4, 8 ,-5, 9];

var myArray = [];
function printPositive (array) {
    array.filter(function(number) {
        if (number >= 0) {
            console.log(number);
            myArray.push(number);
        }
    }
}

var positiveArray2 = printPositive(myArray);
console.log(positiveArray2);







                  