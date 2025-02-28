// anonymous functions -->function without function name is called anonymous function

// function with expression

// let even=function(){
//     for (let i = 0; i <20; i++) {

//        if (i%2==0) {
//         console.log("even num "+i);
//        }
//     }
// }
// even()

let odd=function(){
    for (let i = 0; i <20; i++) {

       if (i%2!=0) {
        console.log("odd num "+i);
       }
    }
}
odd()

// //immediately invoked function with expression
(function(num1,num2) 
{
        if ((num1+num2)>30) 
        {
            console.log('sum of numbers is :'+(num1+num2));
        }  
        else{
            console.log('sum of numbers is :'+(num1-num2));
        }
}
)(10,15)