// 1.1
// let newarr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// for (let i=0; i < newarr.length; i++) {
//     if  (newarr[i] % 3 == 0 && newarr[i] % 5 == 0) {
//         console.log(newarr[i]);
        
//     }
//     }


// //////////
 // 1.2
// let newarr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let sum = 0;
// for (const val of newarr) {
//     if (val % 3 == 0 && val % 5 == 0) {
//     sum += val;
//     } }
//     console.log(sum);


// 1.3
// let newarr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let sum = 0;
// let count = 0;
// for (const val of newarr) {
//     if (val % 3 == 0 && val % 5 == 0) {
//     sum += val;
//     count++;
//     } }
//     console.log(sum/count);



// 1.4
// let newarr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75]
// for (const val of newarr) {
//     if (val % 2 == 0) {
//     console.log(val); 
//     }
// }

// 1.5
// let newarr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let max = newarr[0];
// for (let i = 0; i < newarr.length; i++) {
//     if (max < newarr[i]) {
//         max = newarr[i];
        
//     }
// }
// console.log(max);
 

// 1.6
// let newarr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let min = newarr[0];
// for (let i = 0; i < newarr.length; i++) {
//     if (min > newarr[i]) {
//         min = newarr[i];   
//     }
// }
// console.log(min);


// 1.7
// let newarr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let sum = 0;
//     for (let i=0; i < newarr.length; i++) {
//     sum += newarr[i]
// }
// console.log(sum/newarr.length);

// 1.8
// let newarr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let count1 = 0;
// let count2 = 0;
// for (const num of newarr) {
//     if (num > 0) {
//         count1++;
//     }
//    else {
//         count2++;
//    }
//     }
// console.log(count1);
// console.log(count2);

// 1.9
// let newarr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let kup = 1;
// for (const num of newarr) {
//     if (num > 0) {
//         kup *= num;
//     }
// }
// console.log(kup);

// 1.11
// let newarr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let arr = [];
// for (const num of newarr) {
//     if (num % 2 === 0) {
//     arr.push(num);
//     }
// }
// console.log(arr);

// 1.12
// let newarr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 5, 60, 75];
// let qiymat = 5;
// let count = 0;
// for (const num of newarr) {
//     if (newarr[num]==qiymat) {
//         count++;
//     }
// }
// console.log(count);


// 1.13
// let newarr = [1, 2, -6, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// for (const num of newarr) {
//     if (num >-10 && num < 10) {
//         console.log(num);   
//     }
// }

// 1.14
// let newarr = [0, 2, -6, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let count = 0;
// let index = [];
// for (i = 0; i < newarr.length; i++) {
//     if (newarr[i] == 45 ) {
//         count++;
//         index.push(i);
//     }
// }
// console.log("Soni: " + count);
// console.log( index);

// 1.15
// let newarr = [0, 2, -6, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let arr = [];
// for (let i = newarr.length-1; i>=0; i--) {
//      arr[arr.length] = newarr[i];
// }
// console.log(arr);

// 1.16
//  let data = {
//   id: 1,
//   name: "Ali",
//   status: "active",
//   age: 23,
//   country: "Uzbekistan",
// };
// for (const key in data) {
//     if ((key == "age")) {
//         data["age"] = 30;
        
//     }
// }
// console.log(data);

// 1.17
//  let data = {
//   id: 1,
//   name: "Ali",
//   age: 23,
//   country: "Uzbekistan",
// };
// data.status = "active";
// console.log(data);


// 1.18
//  let data = {
//   id: 1,
//   name: "Ali",
//   age: 23,
//   city: "Toshkent",
//   country: "Uzbekistan",
// };
// delete data.city;
// console.log(data);

// 1.19
//  let data = {
//   id: 1,
//   name: "Ali",
//   age: 23,
//   city: "Toshkent",
//   country: "Uzbekistan",
// };
// let arr = [];
// for (const key in data) {
//     arr[arr.length] = key
// }
// console.log(arr);

// 1.20
//  let data = {
//   id: 1,
//   name: "Ali",
//   age: 23,
//   city: "Toshkent",
//   country: "Uzbekistan",
// };
// for (const key in data) {
//     console.log(data[key]);    
//     }


// 1.21
//  let data = {
//   id: 1,
//   name: "Ali",
//   age: 23,
//   city: "Toshkent",
//   country: "Uzbekistan",
// };
// for (const key in data) {
//     if (key == "age") {
//         console.log(true);  
//     break;
//     }
// }

// 1.22
// let products = {
//   apple: 5000,
//   banana: 7000,
//   melon: 12000,
// };
// let sum = 0;
// for (const key in products) {
//     sum += products[key];
        
//     }
// console.log(sum);

// 1.23
// let data = {
//   id: 1,
//   name: "Ali",
//   status: "active",
//   age: 23,
//   country: "Uzbekistan",
// };
// for (const key in data) {
//     if (typeof data[key] == "string") {
//         console.log(data[key]);
        
        
//     }
// }


// 1.24
// let users = {
//   ali: { age: 21 },
//   vali: { age: 25 },
//   salim: { age: 19 },
// };
// let katta = 0;
// let user = ""
// for (const key in users) {
//     if (katta < users[key].age) {
//     katta = users[key].age;
//     user = users[key];
//     }    
// }
// console.log(user);



