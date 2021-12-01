function handleProductChange(product, increase){
    const productInput =document.getElementById(product);
    const productCount = parseInt(productInput.value);
    let newProductCount = productCount;
    if(increase== true){
       newProductCount = productCount +1;
    }
    if(increase == false && productCount>0){
        newProductCount = productCount -1;
    }

    productInput.value = newProductCount;
    let productTotal;
    if (product == 'laptop'){
        productTotal = newProductCount * 245000;
    }
    else{
        productTotal = newProductCount * 176999;
    }
    document.getElementById(product+'-total').innerText= productTotal;

    handleCheckOut();


}

function handleCheckOut(){
    const laptopCount = document.getElementById('laptop').value;

    const phoneCount = document.getElementById('phone').value;

    const totalPrice = laptopCount*245000 + phoneCount*176999;
    document.getElementById('sub-total').innerText = totalPrice;

    const tax = Math.round(totalPrice * .01);
    document.getElementById('tax').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;

}

function checkout(){
    alert("Thanks for remaining with us");
    location.reload();
}