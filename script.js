const generateQRCode = () => {
    let website = document.getElementById("website").value;
    if(website){
        let qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";
        new QRCode(qrcodeContainer, website);
    }
    else{
        alert("please enter a valid url");
    }
}