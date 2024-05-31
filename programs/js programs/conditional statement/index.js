let year=2000
let date = 20

if(year>=2000 && year<=2010){
    if(date % 3 ==0){
        console.log("lucky")
    }else{
        console.log("bad luck")
    }
}else if (year>=2010 && year<=2020){
    if(date % 5 ==0){
        console.log("lucky one")
    }else{
        console.log("bad lucky one")
    }
}else{
    console.log("all the best")
}

//  n is divisible by 3 print fizz

// n is divisible by 5 print buzz

// n is divisible by 3 and 5 print fizzbuzz

let n = 15;
if(n%3==0){
    console.log("fizz")
}else if(n%5==0){
    console.log("buzz")
}else if(n%3==0 && n%5==0){
    console.log("fizzBuss")
};



if (n>=10 && n<=20){
    if(n%2==0){
        console.log("even")
    }else{
        console.log("not even")
    }
}else(
    console.log("not in range")
)


let n1 = 1;
let n2 = 4;
if(n1 % 2 == 0 || n2 % 2 == 0){
    console.log("hello")
}else{
    console.log("bye")
}



num = (prompt("Enter a Number"))
if (num % 5 === 0){
    console.log("multiple")
}else{
    console.log("not a multiple")
}


let score = 80;
let grade;

if(score >= 80 && score <= 100){
    grade = "A";
}else if(score >=70 && score <=89){
    grade = "B";
}else if(score >=60 && score<=69){
    grade = "c";
}else if(score >=50 && score<=59){
    grade = "D";
}else if (score>=0 && score<=49){
    grade = "F";
}
console.log(grade);

