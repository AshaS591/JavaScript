let btn=document.querySelector('button')
btn.style.fontSize='50px'
btn.style.height='60px'
btn.style.width='200px'

var page=document.querySelector('body')
page.style.transition='2s'
function change() {
    if (page.style.backgroundColor!='black'){
        page.style.backgroundColor='black';
        page.style.color='white';
    }
    else{
        page.style.backgroundColor='white';
        page.style.color='black';
    }
}