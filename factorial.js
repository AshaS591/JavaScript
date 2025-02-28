var num=5
let fact=1
if (num==0 || num==1){
    console.log(fact);
    
}
else{
    while (num!=0) {
        fact*=num
        num-=1
    }

}
console.log(fact);