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

//Write a function called filterArray that takes a callback function and an array 
//as arguments. Your filterArray function should return a new array that contains 
//only the elements where the callback function returns true.
                  
var positiveArray = [3, -9, 7, -2];

function filterArray (array) {
    if (array > 0) {
        return array
    }
};

var newPositiveArray = positiveArray.filter(filterArray);
console.log(newPositiveArray);

//Write a function called longestWord that takes a string as argument, 
//and returns the longest word in the string. 
//You should use Array.prototype.reduce to do your work.

var longString = ["my name is Eve Papineau"];

function longuestWord (string) {
    longString.split(" ");
    return longString;
};

var longuestWord2 = longString.reduce(longuestWord);
console.log(longuestWord2);

//Write a function called longestWord that takes a string as argument, and 
//returns the longest word in the string. You should use Array.prototype.reduce 
//to do your work.

var longString = "My name is Eve Papineau";

function longuestWord (string) {
    longString = string.split(" ");

    var longuestWord2 = longString.reduce(function(word1, word2) {
        if (word1.length > word2.length) {
            return word1;
        }
        else {
            return word2;
        }
    });
    return longuestWord2;
};

longuestWord(longString);