// let my = "vyom " + "joshi";
// console.log(my);
// console.log(typeof String(my));

// var my;
// my = prompt("Enter number:");
// console.log($my);

// const arr = ["ironmen" , "batmen" , "sipermen" , "krish" , "jaddu"];
// let ind = ["thor","captain america"];

// arr.splice(2,1,"mavali")
// console.log(arr);

// let s = arr.slice(1,3);
// console.log(s);

// let mix = arr.concat(ind);
// console.log(mix);

// for(let i = 0 ; i<arr.length ; i++)
// {
//     console.log(arr[i]);
// }
// arr.push("thor","captain america");
// arr.pop();
// for(let h of arr)
// {
//     console.log(h.toUpperCase());

// }
// console.log(arr.length);
// console.log(typeof arr);
//arr[2] = 30;
//console.log(arr);

// function sum(a,b)
// {
//     c = a+b;
//     console.log(c);
// }
// sum(5,5);

// const mul = (a,b) => {
//     c = a* b;
//     console.log(c);
// }
// mul(5,5);

//***************************************************************************
// event in js

// let a = document.querySelector("#btn1");
// const cd = document.getElementById('count');
// let count = 0;

// a.onclick = (evt) => {
//     console.log("btn1 clicked main");

//     count++;
//     cd.textContent = count;

//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX , evt.clientY);
// }

// //use of event listner

// btn1.addEventListener("click" , (evt) => {
//     console.log("btn1 clicked clicked... handler1");
// });

// btn1.addEventListener("click" , (evt) => {
//     console.log("btn1 clicked clicked... handler2");
// });

// btn1.addEventListener("click" , (evt) => {
//     console.log("btn1 clicked clicked... handler3");
// });

// //use of remove event listner

// const hendler4 =  (evt) => {
//     console.log("btn1 clicked clicked... handler4");
// };

// btn1.addEventListener("click" , hendler4);

// btn1.removeEventListener("click" ,hendler4);

//******************************************************************* */

// let mode = document.querySelector("#btn1");
// let color = "light";

// mode.addEventListener("click" , () => {
//     console.log("hiii");
//     if(color === "light")
//     {
//         color = "black";
//        document.querySelector("body").style.backgroundColor = "black";
//     }
//     else
//     {
//         color = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }

//     console.log(color);
// });

//*************************************************** */

//object

// const obj = {
//     myname : "vyom",
// };

// //function in object
// const fun = {
//     myfun()
//     {
//         console.log("Hello");
//     },
// };

// var a=10;

// function fun(){
//     var a=20;
//     console.log(a);
// }
// fun()

//console.log(a);

//************************************************************************** */

// function rearrangeAlternate(arr) {
//     // Separate positive and negative numbers
//     let pos = arr.filter(num => num >= 0);
//     let neg = arr.filter(num => num < 0);

//     let result = [];
//     let i = 0, j = 0;

//     // Alternate between positive and negative
//     while (i < pos.length && j < neg.length) {
//         result.push(pos[i]);
//         result.push(neg[j]);
//         i++;
//         j++;
//     }

//     // If there are remaining positive numbers
//     while (i < pos.length) {
//         result.push(pos[i]);
//         i++;
//     }

//     // If there are remaining negative numbers
//     while (j < neg.length) {
//         result.push(neg[j]);
//         j++;
//     }

//     return result;
// }

// // Example usage:
// let arr = [9,4,-2,-1,5,0,-5,-3,2];
// let rearranged = rearrangeAlternate(arr);
// console.log(rearranged);

// let arr2 = [-5,-2,5,2,4,7,1,8,0,-8];
// let rearranged1 = rearrangeAlternate(arr2);
// console.log(rearranged1);

//*********************************************************** */

// function maxChocolates(money, prices) {
//     // Sort the prices in ascending order
//     prices.sort((a, b) => a - b);

//     let count = 0;

//     // Iterate through the sorted prices
//     for (let i = 0; i < prices.length; i++) {
//         if (money >= prices[i]) {
//             money -= prices[i];
//             count++;
//         } else {
//             break; // Rocky can't afford more chocolates
//         }
//     }

//     return count;
// }

// // Example usage:
// let money = 50;
// let prices = [2,11,6,111,200,100,9];
// let maxChocolatesPurchased = maxChocolates(money, prices);
// console.log(maxChocolatesPurchased); // Output: 4

// let numbers = [1, 2, 3, 2, 4, 5, 3, 6, 1, 7];

// // Create a new array with each number appearing only once
// let uniqueNumbers = [...new Set(numbers)];

// console.log("Array without repeated numbers:", uniqueNumbers);

// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
// console.log(total)

// let array = [10, 12, 14, 16, 18, 20];
// let sum = 0;
// for (arr of array)
// {
//     sum +=arr
// }
// console.log(`Sum of the given array is ${sum}.`);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(arr.reverse())
// console.log(arr[12])
// console.log(arr[arr.length-1])

// let arr = [1,2,3]
// for(i of arr)
// {
//     console.log(i**2)
// }

// function ArrayChallenge(arr) {
//   // Find the largest number in the array
//   const largest = Math.max(...arr);

//   // Remove the largest number from the array
//   arr = arr.filter(num => num !== largest);

//   // Helper function to check if any subset sums up to the largest number
//   function subsetSum(nums, target) {
//     // Initialize a DP array where dp[i] means there is a subset sum of i
//     let dp = Array(target + 1).fill(false);
//     dp[0] = true; // A sum of 0 is always possible (with an empty set)

//     // Update dp array for each number in nums
//     for (let num of nums) {
//       for (let i = target; i >= num; i--) {
//         dp[i] = dp[i] || dp[i - num];
//       }
//     }

//     return dp[target];
//   }

//   // Check if any subset of the array (excluding the largest number) adds up to the largest number
//   return subsetSum(arr, largest) ? "true" : "false";
// }

// // Test cases
// console.log(ArrayChallenge([5, 7, 16, 1, 2]));  // Output: false
// console.log(ArrayChallenge([3, 5, -1, 8, 12])); // Output: true

// console.log(StringChallange(readline()));

// function StringChallenge(str) {
//     // Convert the string to lowercase to make the search case-insensitive
//     str = str.toLowerCase();

//     // Loop through the string to find instances where 'a' and 'b' are 3 characters apart
//     for (let i = 0; i < str.length ; i++) {
//       if ((str[i] === 'a' && str[i + 4] === 'b') || (str[i] === 'b' && str[i + 4] === 'a')) {
//         return "true";
//       }
//     }

//     // Return false if no such instance is found
//     return "false";
//   }

//   // Test cases
//   console.log(StringChallenge("after badly"));   Output: false
//   console.log(StringChallenge("Laura sobs"));    Output: true

// function MathChallenge(num1, num2) {
//   // Helper function to calculate the GCF using the Euclidean algorithm
//   function gcd(a, b) {
//     while (b !== 0) {
//       let temp = b;
//       b = a % b;
//       a = temp;
//     }
//     return a;
//   }

//   // Call the helper function with num1 and num2
//   return gcd(num1, num2);
// }

// // Test cases
// console.log(MathChallenge(12, 16));

// const http = require('http');
// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Welcome to the Home Page!\n');
//   } else if (req.url === '/login') {
//      res.end('login successful\n');
//   } else {
//     res.end('404 Not Found\n');
//   }});
//   const PORT = 3000; server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });

// const mysql = require('mysql2'); const prompt = require('prompt');
// prompt.start();
// const schema = {
// properties: {
// name: {
// description: 'Enter name', type: 'string',
// required: true
// },
// email: {
// description: 'Enter email', type: 'string',
// required: true}}};
// prompt.get(schema, (err, result) => { if (err) {
// console.error('Error getting user input: ', err); return;
// }
// const connection = mysql.createConnection({ host: 'localhost',
// user: 'root',
// password: '', database: 'mydb'
// });
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database: ',err);
//     return;
//   }
//   console.log('Connected to the MySQL database.');

// const user = { name: result.name, email: result.email };
// connection.query('INSERT INTO users SET ?', user, (error, results) => {
//   if (error) {
//     console.error('Error inserting data: ', error); connection.end();
//     return;
//   }
//   console.log('User inserted with ID: ', results.insertId);
// ()=> {
//   connection.query('SELECT * FROM users', (error, results))
//   if (error) {
//     console.error('Error fetching data: ', error); connection.end();
//     return;
//   })
// })
// })
// console.log('Users: ', results)
// connection.end()

// const arr = [10, 20, 30];
// for (let value of arr) {
//     console.log(value); // Outputs: 10, 20, 30
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 2 * (5 - i) - 1; j++) {
//      process.stdout.write(" ");
//   }
//   for (let k = 0; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }


for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 2 * (5 - i) - 1 ; j++){
    process.stdout.write(" ");
  }
  for (let k = 0; k < 2*i +1; k++){
    process.stdout.write("* ");
  }
  console.log();
}