let a=document.getElementsByTagName('img')
console.log(a)
a[0].src="https://tse4.mm.bing.net/th?id=OIP.uXLLU88V0TEjbvPPIBchmQHaJQ&pid=Api&P=0&h=180"
a[0].style.height='400px'
a[0].style.width='300px'
function change(params) {
    if (a[0].style.animation==false) {

        
        a[0].style.border='20px solid deeppink'
        // a[0].src="https://www.msn.com/en-in/feed?ocid=msedgdhp&pc=U531&cvid=0c9298dfa3934555d3c2adc328abe540&ei=16"
        
    }
    else{
        a[0].style.border='10px solid black'
    }
    
}
 
let bold=document.querySelector('.b1')
console.log(bold)
bold.innerHTML='This a new paragragh'
bold.style.fontSize='50px'

let para=document.querySelectorAll('p')
console.log(para)
para[0].innerText="This is a para"