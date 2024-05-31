for(let i=1;i<=5;i++){
    console.log(i)
}
let i = 1;
for( i;i<=5;i++){
    console.log(i)
}

for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i)
    }
}



for(i=1;i<=25;i++){
    if(i%3==0 && i%5==0){
        console.log("fizzBuzz")
    }else if(i%3==0){
        console.log("fizz")
    }
    else if(i%5==0){
        console.log("buzz")
    }else{
        console.log(i)
    }
}

let n = 100;
let sum = 0;

for(let i=1;i<=n;i++){
    sum = sum+i;
}
console.log(sum)



for(let count=1;count<=5;count++){
    console.log("hello aayushi")
}

//-----------------for of ---------------//
size=0;
let str = "hello"
for(let i of str){
    console.log(i)
    size++;
}
console.log(size)

//----------------for in ---------------//
let student = {
    name : "aayushi",
    age : 20,
    cgpa : 8.89,
    isPass : true,
};
for(let key in student){
    console.log( key, student[key])
}

let gamenumber = 100;
let num = prompt("guess the numver")
for(let i=0;i<=gamenumber;i++){
    if (num%gamenumber===0){
        console.log("correct number")
    }else{
        console.log("wrong number")
    }
}

//-------------for of -----------------//
for(let hero of heroes){
    console.log(hero)
}