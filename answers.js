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
//console.log(newPositiveArray);

//Write a function called longestWord that takes a string as argument, 
//and returns the longest word in the string. 
//You should use Array.prototype.reduce to do your work.

var longString = ["my name is Eve Papineau"];

function longuestWord (string) {
    longString.split(" ");
    return longString;
};

var longuestWord2 = longString.reduce(longuestWord);
//console.log(longuestWord2);

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

//console.log(countVowels("The quick brown fox"));

//Write a function called highLow that takes an array of numbers, and returns an
//object with a property highest containing the highest number, and a property 
//lowest containing the lowest number, using Array.prototype.reduce.
//For example, starting with [1, -10, 20, 40, 5], your function should 
//return {highest: 40, lowest: -10}.

var myArray = [1, -10, 20, 40, 5];

function highLow (myArray) {
    var biggest = myArray.reduce(function(obj, num) {
        if (num > obj.highest) {
            obj.highest = num; 
        }
        else if (num < obj.lowest) {
            obj.lowest = num;
        }
        return obj;
    }, {highest: -Infinity, lowest: Infinity});
    return biggest;
};

//console.log(highLow(myArray));

//Expanding on exercise 6, write a function called highLowTwo that takes an 
//array of numbers, and returns the highest, second highest, lowest, and second lowest numbers.

var arr = [1, -10, 20, 40, 5];

function highLowTwo (arr) {
    var first = arr.reduce(function(obj, num) {
        if (num > obj.highest) {
            obj.previousHighest = obj.highest;
            obj.highest = num;
        }
        else if (num )
        if (num < obj.lowest) {
            obj.previousLowest = obj.lowest;
            obj.lowest = num;
        }
        if(num < obj.previousHighest && num > obj.previousLowest) {
          ;
            
        }
        if(num < obj.previousLowest) {
            
        }
        return obj;
    }, {highest: -Infinity, previousHighest: -Infinity, lowest: Infinity, previousLowest: Infinity});
    return first;
};

//console.log(highLowTwo(arr));

//Write a function called countChars that takes a string, and returns an object 
//where the keys are letters, and the value is the number of times that letter appears.

var hello = "hello world";

function hello2 (str) {
  hello = str.replace(/\W/g, '').toLowerCase();
  return hello.split('');
}
var whtaToBeSplit = hello2(hello);

function split (hello) {
    return whatToBeSplit.reduce(function(obj, letter) {
        if (obj[letter]) {
            obj[letter] += 1;
        }
        else {
            obj[letter] = 1;
        }
        return obj; 
    }, {});
}

console.log(split(hello));