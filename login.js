let name=document.querySelector('name')
console.log(name);

let password=document.querySelector('Password')
console.log(password);
function change(params) {
   let username=prompt('Enter name')
   let passkey=prompt('Enter password')
   if (name===username && passkey===password)
   {
        alert('login successfull')
   }
   else
   {
        alert('login failed')
   }
    
}
