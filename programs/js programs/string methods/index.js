let str0 = "aayushi"
str = str.toUpperCase()  // toLowerCase
console.log(str)



// -------------slice --------------------//
let str3 = "hello"
console.log(str.slice(0,3))

//------------------concat---------------//
let str1 = "hello"
let str2 = "world"

let result = str1.concat(str2)
console.log(result)

//------------------replace------------------//
let str4 = "aayushi"
console.log(str.replace("a","s"))

//--------------------charAt-------------------//
let str = "i love js"
console.log(str.charAt(2))



let fullname = prompt("Enter a fullname");
let username = "@" + fullname + fullname.length;
console.log(username);