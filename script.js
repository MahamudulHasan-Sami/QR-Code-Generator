const qrInput = document.getElementById('qr-input');
const qrImage = document.getElementById('qr-code-img');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener("click",function(){
    const inputValue = qrInput.value;
    
    if(!inputValue){
        alert('Please enter a valid url');
        return;
    }else{
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrImage.alt = `QE Code for ${inputValue}`;
    }
})
    
