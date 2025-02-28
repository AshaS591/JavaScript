var num=90;
console.log(typeof num);  //number

num=.1325
console.log(typeof num);  //number

num=-199
console.log(typeof num);  //number

num=-.99
console.log(typeof num);  //number

num=896389936
console.log(typeof num);  //number

let str=''
console.log(typeof str);  //string

str='12'
console.log(typeof str);  //string

str='asha'
console.log(typeof str);  //string

str='true'
console.log(typeof str);  //string

str=' '
console.log(typeof str);  //string

var val=true;
console.log(typeof val);  //boolean

new_val=false
console.log(typeof val);  //boolean

val=val+new_val
console.log(typeof val);  //number in js true means 1 and false means 0 ,when we performs addition and results datatype as a number

num=true //1
val=true //1
num=num+val
console.log(num);  //2
console.log(typeof num);  //number

let null_value=null
console.log(null_value); //null
console.log(typeof null_value);  //object

let value
console.log(value); //undefined
console.log(typeof value);  //undefined

//when we use + on string and number ,it will convert number into string by compiler  and performs concatenation

num=20
str='asha'
console.log(num+str);  //20asha

num=20
str='12'
console.log(num+str);  //2012

//when we use - on string(number) and number ,it will convert string into number by compiler  and performs subtraction

num1=30
num2='10'
console.log(num1-num2); //20

num1=30
num2='as'
console.log(num1-num2); //NaN

num1=30
num2='as'
console.log(num1*num2);//NaN(not a number)