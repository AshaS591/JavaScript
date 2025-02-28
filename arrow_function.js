// console.log('Hello');
// setTimeout(()=>{
//     console.log("Javascript");
    
// },2000)
// console.log('python','sql');

// let print=()=>{
//     console.log('this is arrow function');  
// }
// print()
// console.log('123');
 
let cart=[
    {
    id:786,
    price:1000,
    name:'bike'
},
{
    id:787,
    price:5000,
    name:'car'
},
{
    id:788,
    price:400,
    name:'truck'
}
]
let c=cart.filter((x)=>{
    return x.price>500;
})
console.log(c);

let a=cart.map((x)=>
{
    return x;
}
)
console.log(a)
let b=cart.forEach((i)=>{
    return i
})
console.log(b);

let arr=cart.reduce((sum,x)=>
    sum+=x.price,0 //0 is passed after callback to initialise sum to 0 at beginning


)
console.log(arr);

let array=[100,45,1,34,18,90,23,20]
let sorted_array=array.sort((a,b)=>{
    return a-b;//returns array in asc
    // return b-a;//returns array in desc
})
console.log(sorted_array);
