let images=document.getElementsByTagName('img')
let bold=document.getElementsByTagName('b')
console.log(bold,images);
async function fetchData() {
    let res=await fetch('https://jsonplaceholder.typicode.com/photos')
    let data=await res.json();
    console.log(data)
    for (let i = 0; i < bold.length; i++) {
        bold[i].innerText=data[i].title;
        images[i].src=data[i].thumbnailUrl;
        
    }
    
}
fetchData()