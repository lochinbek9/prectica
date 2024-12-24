
"use strict";


 // Foydalanuvchidan sonni kiritishni so'raymiz
// let number = +prompt("Son kiriting: ");

 // Juft yoki toqligini tekshiramiz
// if(number !== typeof Number()){
//     console.log("Raqam kiritganizga ishonch ");  
// }

// else if (number % 2 === 0) {
//     console.log(number + " - Juft son");
// } else {
//     console.log(number + " - Toq son");
// };

// Foydalanuvchidan sonni kiritishni so'raymiz
// let input = prompt("0 dan 10 gacha son kiriting:");

// Raqamni son ko‘rinishiga o‘giramiz va tekshiramiz
// let number = Number(input);

// 0–10 oralig‘ida bo‘lsa, sonni yozuvga o‘giramiz
// if (!isNaN(number) && number >= 0 && number <= 10) {
    
//     let words = ["nol", "bir", "ikki", "uch", "to‘rt", "besh", "olti", "yetti", "sakkiz", "to‘qqiz", "o‘n"];
//     console.log(number + " - " + words[number]);
// } else {
//     console.log("Iltimos, 0 dan 10 gacha bo‘lgan son kiriting!");
// }

// Foydalanuvchidan son kiritishni so'raymiz

// let input1 = prompt("1 dan nechagacha bo'lgan sonlarni yig'indisini hisoblashni xohlaysiz?");

// let input2 = prompt("1 dan nechagacha bo'lgan sonlarni yig'indisini hisoblashni xohlaysiz?");

// Raqam ekanligini tekshiramiz
// let number1 = Number(input1);
// let number2 = Number(input2);

// if(number1 < number2){


//     if (!isNaN(number1) && !isNaN(number2) && number1 > 0 && number2 > 0) {
//         let sum = 0;
    
//          1 dan kiritilgan songacha bo'lgan sonlarni yig'indisini hisoblaymiz
//         for (let i = number1; i <= number2; i++) {
//             sum += i;
//         }
    
//         console.log(`${number1} dan ${number2} gacha bo'lgan sonlarning yig'indisi: ${sum}`);
//     } else {
//         console.log("Iltimos, musbat butun son kiriting!");
//     }
// } else{
//     console.log("Iltimos, 1 dan boshqa son kiriting!");
// }

// Foydalanuvchidan son kiritishni so'raymiz

// const number = +prompt("Raqam kiriting");

// if(isNaN(number) && number > 0){
//     console.log("Raqam kiritganizga ishonch");
// } else{

//     let factorial = 1;

//     for(let i = 2; i <= number; i++){
//         factorial *= i;
//     };
//     console.log(`Raqamning faktoriyalini: ${factorial}`);
// };

// const number = +prompt("Raqam kiriting");

// if(isNaN(number) && number > 0){
//     console.log("Raqam kiritganizga ishonch");
// } else{

//     let factorial = 1;
    
//     for(let i = 2; i <= number; i++){
//         factorial *= i;
//     };
//     console.log(`Raqamning faktoriyalini: ${factorial}`);
// };

// let number = 125; // Foydalanuvchidan kiritilgan son
// let digits = number.toString().split(""); // ["1", "2", "3", "4", "5"]

// let sum = 0;

// Har bir belgini son ko'rinishiga o'tkazib yig'indisini hisoblash
// for (let digit of digits) {
//     sum += Number(digit);
// }

// console.log(`Raqamlar yig'indisi: ${sum}`);

// Foydalanuvchidan musbat butun son kiritishni so'raymiz
// let number = prompt("Musbat butun son kiriting:");

// Son ekanligini tekshiramiz
// if (isNaN(number) || number <= 0) {
//     console.log("Iltimos, musbat butun son kiriting!");
// } else {
//     let sum = 0;

    // Bu yerda siz raqamlarni ajratish va yig'indisini hisoblash qismiga yozasiz
//     for (let i = 0; i < number.length; i++) {        
//         sum += Number(number[i]); // Har bir raqamni yig'indiga qo'shamiz
//     }

//     console.log(`Raqamlar yig'indisi: ${sum}`);
// }

// const userinput = prompt("ism kiriting");

// if(isFinite(userinput)){
//     console.log("Text kiritng");
// } else{
//     let word = userinput.split("");    
//     let resersWord = word.reverse();
//     let resers = resersWord.join("");
    
//     console.log(resers == userinput);
// }

// const userinput = +prompt("raqam kiriting");

// if(userinput % 3 === 0 && userinput % 5 === 0){
//     console.log("FizzBuzz");
// } else if(userinput % 3 === 0){
//     console.log("Fizz");
// } else if(userinput % 5 === 0){
//     console.log("Buzz");
// } else{
//     console.log(userinput);
// }

// function fibonacci() {
//     let fib = [0, 1];
//     let n = +prompt("N-ci fibonacci sonini hisoblash uchun son kiriting:");
    
//     if(isNaN(n) || n <= 0){
//         console.log("Iltimos, musbat butun son kiriting!");
//         return;
//     }
    
//     if(n === 1){
//         console.log(fib[0]);
//     } else if(n === 2){
//         console.log(fib[1]);
//     } else{
//         for(let i = 2; i < n; i++){
//             fib[i] = fib[i - 1] + fib[i - 2];
//         }
//         console.log(fib[n - 1]);
//     }
// }

// function factorial(n) {
//     let result = 1;

//     for(let i = 2; i <= n; i++) {
//         console.log(i);
        
//         result *= i;
//     }
    
//     return result;
// }

// console.log(factorial(5));

// function isPrime(n) {
//     if (n < 2) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(12));


// const input = +prompt("Please");



// if(isNaN(input)){
//     console.log("Raqam kiriting");
// } else {
//     for(let i = 0; i < input; i++) {
//         console.log(res[i]);
//     }
    
// }


// const input = prompt("Sonlarni vergul orqali kiriting:"); // Foydalanuvchidan kirish
// const numbers = input.split(",").map(Number); 
// let sum = 0; 
// let max = -Infinity;
// let min = Infinity;

// console.log(min);


// for(let num of numbers){
//     sum += num;
//     if(num > max){
//         max = num;
//     }
//     if(num < min){
//         min = num;
//     }

// }

// const avg = sum / numbers.length;

// console.log(`Summa: ${sum}`);

// function isPowerOfTwo(n){
//      if(n < 1){
//         return false;
//     }
//     while(n > 1){
//         if(n % 2!= 0){
//             return false;
//         }
//         n = n / 2;
//     }

//     return true;
// }

// console.log(isPowerOfTwo(16)); // true



// function recursive(n){
//     if(n === 0){
//         return 1;
//     }
//     return n * recursive(n - 1);
// }

// console.log(recursive(7)); // 120.


const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";

    } else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"
    } else{
        result.textContent = "Select a unit"
    }
}