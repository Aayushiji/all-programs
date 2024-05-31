//------------while loop -----------//'
let a = 1;
while(a<=5){
    console.log(a);
    a++;
}

let i = 1;
let stop = true;
while(stop){
    if(i<=25){
        if(i%3==0 && i%5 ==0){
            console.log("fizzBuzz")
        }
        else if(i%3==0){
            console.log("fizz")
        }
        else if(i%5==0){
            console.log("buzz")
        }else{
            console.log(i)
        }
        i++;
    }else{
        stop = false;
    }
}

while(stop){
    if(i<=10){
        if(i%2==0){
            console.log(i);
        };
        i++;
    }else{
        stop=false
    }
}


// ------------Do while loop ---------------//
// ye loop ek na ek baar to print kre ga agar condition false bhi ho to 
let X = 20;
do{
    console.log("hello")
    X++
}while(X<=10)
