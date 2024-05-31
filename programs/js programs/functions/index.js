//----------------FUNCTION---------------------//

function myFunction (){
    console.log("hello world")
}
myFunction(); // function call krna pdta hai 

//----------------sum function -------------------//
function summ (a,b){
    s = a+b;
    return s;
}
let val = summ(10,20);
console.log(val)

//-------------------Arrow functions--------------------//
const arrowSumn = (x,y)=>{
    return x+y;
}
arrowSumn(2,4)

const printHello = ()=>{
    console.log("hello");
};
//------------------practice question vowels -----------------//
function countVowels (str){
    let count = 0;
    for(let char of str){
        if(char ==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    return count;
}
//--------------------with Arrow function---------------------//
const arrowVowels = (str)=>{
    let count = 0;
    for(let char of str){
        if(char ==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    return count;
}

//----------------------for each loop in arrays-----------------------//

let arr = [1,3,5,7,9,4,3]
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});

let arr1 = [2,5,8,4,3]
arr1.forEach((val)=>{
    console.log(val**2)//(val*val)
}); 
