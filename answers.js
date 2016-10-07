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

//Write a function called countVowels that takes a string and returns the number 
//of vowels in the string. You should use Array.prototype.reduce to do your work.
//For the string "The quick brown fox", the output should be 5 because 
//there is one e, one u, one i and two os.

var vowels1 = ['a','e','i','o','u','y'];

function countVowels (string) {
    var string1 = string.split("");
    var vowels = string1.reduce(function(counter, letter) {
        if (vowels1.indexOf(letter) > -1) {
            counter = counter + 1;
        }
        return counter;
    }, 0);
    return vowels;
}

console.log(countVowels("The quick brown fox"));

//Write a function called highLow that takes an array of numbers, and returns an
//object with a property highest containing the highest number, and a property 
//lowest containing the lowest number, using Array.prototype.reduce.
//For example, starting with [1, -10, 20, 40, 5], your function should 
//return {highest: 40, lowest: -10}.

var myArray = [1, -10, 20, 40, 5];

function highLow (myArray) {
    var biggest = myArray.reduce(function(obj, num) {
        if (num > obj.highest) {
            num = obj.highest; 
        }
        else if (num < obj.lowest) {
            num = obj.lowest;
        }
        return obj;
    }, {highest: -Infinity, lowest: Infinity});
    return biggest;
};

console.log(highLow(myArray));
