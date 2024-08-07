const text = document.getElementById('action')
const button  = document.getElementById('btn')
const images =document.getElementById('img')
const code  =document.getElementById('qrcode')
images.style.display="none"
button.addEventListener('click',() => {
    if(text.value === ''){
        alert('fill the given input')
    }else{
    images.style.display="block";
    }
    images.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+text.value


})