// let array=[10,'word',true,[20,90],true,12.899,true]; //dynamically typed and homogeneous and heterogeneous collection
// console.log(array);
// console.log(array.length);

// array.push(100,2100) //accepts 1 or more elements and adds at end
// console.log(array);

// array.pop() //removes at last element
// console.log(array);

// array.unshift('first','asha')//adds at first index
// console.log(array);

// array.shift()//removes element at first index
// console.log(array);

// console.log(array[2]); //indexing starts from 0 //not supports -ve indexing
// console.log(array[4][1]);

// array.splice(1,2,'hey',99) //takes 3 arguments 1.sp,2.delete count,3.new elements(0ne or more)
// console.log(array);

// // array.splice(1) //if we miss delete count it deletes all the elements after starting index
// // console.log(array);

// array.splice(1,0)
// console.log(array);

// array.splice(1,0,'asha2')
// console.log(array);

// let arr=array.slice(1,3) //it removes elements from 1 to 3 but not 3
// console.log(arr);
// console.log(array);

// let str=array.toString()
// console.log(str);

// str=array.join(' ') // converts to string and separates each element by space(by specificed character )
// console.log(str);

// str=array.includes('true') //checks for the existance of the element
// console.log(str);

// str=array.indexOf(true) //returns first index of an Element
// console.log(str);

// str=array.lastIndexOf(true) //returns last index of an Element
// console.log(str);

// str=array.indexOf(true,2) //returns  index of an Element after starting index
// console.log(str);

// str=array.reverse()
// console.log(str);
let array=[10,20,'hi','even',100,true,null]
// array.splice(1,4,30,50,60,45,23)
// console.log(array);
let arr=array.slice(1,7)
console.log(arr);
console.log(array.toString());
console.log(array.join('@'));


