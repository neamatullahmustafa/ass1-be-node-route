// console.log("object")

//----------------------------1---------------------
// function sum(num1 , num2) {
//     return num1 + num2;
// }
// console.log(sum(1, 2));

//----------------------------2---------------------
// function isAPalindrome(word) {
//     for (let index = 0; index < word.length / 2; index++) {      
//       if (  word[index] != word[word.length - index - 1]) {
//           return false;
//       }    
//     }
//     return true;
// }
// console.log(isAPalindrome("neama"));

//----------------------------3---------------------
// function reserveGivenString() {
//     let input = prompt("given string")
//     return input;
// }
// console.log(reserveGivenString());

//----------------------------4---------------------
// function evenArrayOfNumber(arr) {
//     let evenArr = [];
//     arr.forEach(element => {
//     if (element%2===0) {
//        evenArr.push(element) 
//     }
//     });
//     return evenArr;
// }
// console.log(evenArrayOfNumber([1,2,3,4,5,6,7,8,9,0]));

//----------------------------5---------------------
// function deepCopy(arrOrObject) {
//     let copyArrOrObject = arrOrObject;
//     return copyArrOrObject;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let obj = {
//   first: 1,
//   second: 2,
//   third: 3,
// };
// console.log(deepCopy(arr));
// console.log(deepCopy(obj));

// ----------------------------6---------------------
// function reverseString(str) {
//     let revStr = "";
//     for (let index = str.length-1; index >= 0; index--) {
//         revStr+=str.charAt(index);
//     }
//     return revStr;
// }
// console.log(reverseString("abcdefghigklm"));

//----------------------------7---------------------
// function sumArray(arr) {
//     let sum = 0;
//     arr.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//----------------------------8---------------------
// function facArray(num) {
//   let fac = 1;
//       for (let index = num; index > 0; index--) {
//             fac *= index;
//       }
//   return fac;
// }
// console.log(facArray(9));

//----------------------------9---------------------
// function avrgArray(arr) {
//     let sum = 0;
//     arr.forEach(element => {
//         sum += element;
//     });
//     return sum / arr.length;
// }
// console.log(avrgArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//----------------------------10---------------------
// function specIndexArray(arr ,ele) {
//     return arr.indexOf(ele);
// }
// console.log(specIndexArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],3));

//----------------------------11---------------------
// function isInteger(num) {
//     return Number.isInteger(num);
// }

// console.log(isInteger(5.3));

// ----------------------------12---------------------
// function ageInDay(age) {
//     return age*365;
// }
// console.log(ageInDay(3));
//----------------------------13---------------------
// function sayHello(callback) {
//     console.log("fun");
//         if (callback && typeof callback === 'function') {
//         callback();
//     }
// }
// function sayGoodbye() {
//     console.log('callFun');
// }
// sayHello(sayGoodbye);
