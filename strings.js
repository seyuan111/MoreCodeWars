//Return Strings - Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

//function greet(name){
//    return `Hello, ${name} how are you doing today?`
//  }

//reversed words - Complete the solution so that it reverses all of the words within the string passed in.

//function reverseWords(str){
//    return str.split(' ').reverse().join(' '); // reverse those words
    
//  }

//Sum as Strings - Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

//function sumStr(a,b) {
//    return Number(a)+Number(b)+''
//  }

//Abbreviate a Two Word Name - Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//function abbrevName(name){

//    [first,last] = name.toUpperCase().split(' ');
//    return first[0] + '.' + last[0];
  
//  }

//Multiplication table for number - Your goal is to return multiplication table for number that is always an integer from 1 to 10.

//function multiTable(number) {
//    return [1,2,3,4,5,6,7,8,9,10].map(item => `${item} * ${number} = ${item*number}`).join('\n');
//  }

//You're writing code to control your town's traffic lights. You need a
//function to handle each change from green, to yellow, to red, and
//then to green again.
//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//For example, update_light('green') should return 'yellow'.

//function updateLight(current) {
  
//    if(current === "green"){
//      return "yellow";
//    }else if(current === "yellow"){
//      return "red";
//    }else if(current === "red"){
//      return "green";
//    }

//or

  //  switch(current){
  //      case "green":
  //      return "yellow";
        
  //      case "yellow":
  //      return "red";
        
  //      case "red":
  //      return "green";
  //  }
  
// }

//Your goal in this kata is to create complete the mouth_size method
//this method take one argument animal which corresponds to the
//animal encountered by frog. If this one is an alligator
//(case insensitive) return small otherwise return wide.

//function mouthSize(animal) {
//  let mouth_size = "";
  
//  if(animal === "alligator"){
//    return "small";
//  }else{
//    return "wide";
//  }
//  return animal;
//}

//Create a function close_compare that accepts 3 parameters: a, b, and an
//optional margin. The function shouldreturn whether a is lower
//than, close to, or higher than b.

//function closeCompare(a, b, margin=0){
//  if(Math.abs(a - b) <= margin){
//    return 0;
//  }else if(a < b){
//    return -1;
//  }else{
//    return 1;
//  }
//  return margin;
//}

//Leap Year - years divisible by 4 are leap years
//but years divisible by 100 are not leap years
//but years divisible by 400 are leap years

//function isLeapYear(year) {
//  if(year % 4 === 0 && year % 100 !==0 || year % 400 === 0){
//    return true
//  }else{
//    return false
//  }
//}

//Americans are odd people: in their buildings, the first floor
//is actually the ground floor and there is no 13th floor
//(due to superstition). Write a function that given a floor in the
//american system returns the floor in the european system. With the
//1st floor being replaced by the ground floor and the 13th floor
//being removed, the numbers move down to take their place. In case
//of above 13, they move down by two because there are two omitted
//numbers below them.

//function getRealFloor(n) {

//  if (n > 13){
//    return n-2;
//  }else if(n > 0){
//    return n-1;
//  }else{
//    return n;
//  }
//}

//Find the first non-consecutive number

//function firstNonConsecutive (arr) {
//  for (let i = 0; i< arr.length-1; i++){
//    if(arr[i+1] != arr[i]+1){
//      return arr[i+1];
//    }
//  }
//  return null;
//}

//Create a method all which takes an array and a predicate
//(function pointer), and returns true if the predicate returns true for
//every element in the array. Otherwise, it should return false. If the
//array is empty, it should return true, since technically nothing failed
//the test.

//function all( arr, fun ){
  
//  return arr.every(fun)
//}

//In this kata you need to check the provided array (x) for good ideas
//'good' and bad ideas 'bad'. If there are one or two good ideas, return
//'Publish!', if there are more than 2 return 'I smell a series!'. If
//there are no good ideas, as is often the case, return 'Fail!'.

//function well(x){
  
//  switch(x.filter(i => i === "good").length){
//      case 0:
//        return "Fail!"
//      case 1:
//      case 2:
//        return "Publish!"
//      default:
//        return "I smell a series!"
//  }
//}

//Watermelon

//It's too hot, and they can't even…
//One hot summer day Pete and his friend Billy decided to buy
//watermelons. They chose the biggest crate. They rushed home,
//dying of thirst, and decided to divide their loot, however they
//faced a hard problem. Pete and Billy are great fans of even numbers,
//that's why they want to divide the number of watermelons in such
//a way that each of the two parts consists of an even number of
//watermelons. However, it is not obligatory that the parts are equal.

//Example: the boys can divide a stack of 8 watermelons into 2+6
//melons, or 4+4 melons.

//The boys are extremely tired and want to start their meal as soon
//as possible, that's why you should help them and find out, whether
//they can divide the fruits in the way they want. For sure, each of
//them should get a part of positive weight.
//Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell),
//check whether Pete and Billy can divide the melons so that each of
//them gets an even amount.

//function divide(weight){
//  if(weight===2)return false;
// else if(weight % 2 === 0){
//   return true
// }else{
//   return false
// }
//}

//Find the smallest integer in the array

//class SmallestIntegerFinder {
//  findSmallestInt(args) {
//    return Math.min(...args);    
//  }
//}

//In Between

//Complete the function that takes two integers (a, b, where a < b) and
//return an array of all integers between the input parameters,
//including them.

//For example:

//a = 1
//b = 4
//--> [1, 2, 3, 4]

//function between(a, b) {
  
//  const arr = [];
  
//  for(let i=a; i <= b; i++){
//   arr.push(i);
//  }
//  return arr;
//}

//Given an array of integers nums and an integer target, return indices
//of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution,
//and you may not use the same element twice.

//You can return the answer in any order.

//var twoSum = function(nums, target) {
//  const map = new Map()
  
//  for (let i=0; i<=nums.length;i++){
//      let num1 = nums[i];
//      let num2 = target - num1
//      if(map.has(num2)) {
//          return [i, map.get(num2)];
//      }
//      map.set(num1,i)
//  }
//};

//Longest Common Prefix

//Write a function to find the longest common prefix string amongst an
//array of strings.

//If there is no common prefix, return an empty string "".

//var longestCommonPrefix = function(strs) {
//  let prefix = ""
//  if(strs === null || strs.length === 0) return prefix

//  for (let i=0; i < strs[0].length; i++){ 
//      const char = strs[0][i]

//      for (let j = 1; j < strs.length; j++){ 
//          if(strs[j][i] !== char) return prefix
//      }
//      prefix = prefix + char
//  }

//  return prefix
//}