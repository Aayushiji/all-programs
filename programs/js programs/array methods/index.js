//------------------------Map------------------------//

let nums = [1,3,5,7,9,10]

let newArr = nums.map((val)=>{
    return(val*val)
});
console.log(newArr);

// //----------------------filter----------------------// 
let arr3 = [1,2,4,6,8,10]
let evensArr = arr3.filter((val)=>{
    return (val%2 ==0);
})
console.log(evensArr)

// //-----------------reduce-----------//
let n = [1,3,5,7]

const output = n.reduce((res,curr)=>{
    return res > curr? res : curr;
});
console.log(output);

let markss = [56,45,85,95,90,97]

let newmarkss = markss.filter((val)=>{
    return val > 90;
});
console.log(newmarkss)

let n1 = prompt("enter a number");
let arrr = [];
sum = 0;

for (let i = 1;i<=n1; i++){
    arrr[i-1] = i;
}
let sumk = arrr.reduce((res,curr)=>{
    return res+curr;
})
let factorial = arrr.reduce((res,curr)=>{
    return res*curr;
})
console.log(sumk);
console.log(factorial)


console.dir(document.body)