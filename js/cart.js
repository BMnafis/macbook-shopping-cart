// Global variable decleration
const memory8 = document.getElementById('memory8');
const memory16 = document.getElementById('memory16');
const storage256 = document.getElementById('storage-256');
const storage512 = document.getElementById('storage-512');
const storage1TB = document.getElementById('storage-1tb');
const freeShip = document.getElementById('free');
const expressShip = document.getElementById('express');

const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const shippingCost = document.getElementById('delivery-charge');

const total = document.getElementById('total');
const grandTotal = document.getElementById('grand-total');
const promoButton = document.getElementById('promo-btn');

// All functions -----------------------------------------------
//Check style class Contain to all product option
function isContainSelected(element){
   return element.classList.contains('selected');
}

// promo code apply 
function addPromoCode(){
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value;

    const discount = (updateTotalPrice() * 20) / 100;

    if(promoCode.toLowerCase() == 'stevekaku'){
        grandTotal.innerText = updateTotalPrice() - discount;
        promoInput.value = '';
        document.getElementById('promo-success').innerText = 'Wow! you got 20% discount!';
        document.getElementById('promo-error').innerText = '';
    }else{
        document.getElementById('promo-error').innerText = 'Invalid Promo code!';
        promoInput.value = '';
        document.getElementById('promo-success').innerText = '';
    }
}

// update total Price
function updateTotalPrice(){
    const bestPriceNumber = parseInt(bestPrice.innerText);
    const memoryCostNumber = parseInt(memoryCost.innerText);
    const storageCostNumber = parseInt(storageCost.innerText);
    const shippingCostNumber = parseInt(shippingCost.innerText);
    // Calculating Primary total
    const totalCost = bestPriceNumber + memoryCostNumber + storageCostNumber + shippingCostNumber;
    total.innerText = totalCost;

    const grandTotalPrice = totalCost;
    grandTotal.innerText = grandTotalPrice;

    return grandTotalPrice;
}

// All click event handlers -----------------------------------------------------

// events for memory buttons
memory8.addEventListener('click', function(){
    // updatePackagePrice(memoryCost, 0);
    memoryCost.innerText = '0';
    updateTotalPrice();

    // selected class apply
    if(!isContainSelected(memory8)){
        memory8.classList.add('selected');
        memory16.classList.remove('selected');
    
    }

})
memory16.addEventListener('click', function(){
    // updatePackagePrice(memoryCost, 180);
    memoryCost.innerText = '180';
    updateTotalPrice();

    // selected class apply
    if(!isContainSelected(memory16)){
        memory8.classList.remove('selected');
        memory16.classList.add('selected');
        
    }
})

// events for storage buttons
storage256.addEventListener('click', function(){
    // updatePackagePrice(storageCost, 0);
    storageCost.innerText = '0';
    updateTotalPrice();

    // selected class apply
    if(!isContainSelected(storage256)){
        storage256.classList.add('selected');
        storage512.classList.remove('selected');
        storage1TB.classList.remove('selected');
        
    }
})
storage512.addEventListener('click', function(){
    // updatePackagePrice(storageCost, 100);
    storageCost.innerText = '100';
    updateTotalPrice();

    // selected class apply
    if(!isContainSelected(storage512)){
        storage256.classList.remove('selected');
        storage512.classList.add('selected');
        storage1TB.classList.remove('selected');
        
    }
})
storage1TB.addEventListener('click', function(){
    // updatePackagePrice(storageCost, 180);
    storageCost.innerText = '180';
    updateTotalPrice();

    // selected class apply
    if(!isContainSelected(storage1TB)){
        storage256.classList.remove('selected');
        storage512.classList.remove('selected');
        storage1TB.classList.add('selected');
        
    }
})

// events for delivery buttons
freeShip.addEventListener('click', function(){
    // updatePackagePrice(shippingCost, 0);
    shippingCost.innerText = '0';
    updateTotalPrice();

    // selected class apply
    if(!isContainSelected(freeShip)){
        freeShip.classList.add('selected');
        expressShip.classList.remove('selected');
        
    }
})
expressShip.addEventListener('click', function(){
    // updatePackagePrice(shippingCost, 20);
    shippingCost.innerText = '20';
    updateTotalPrice();

    // selected class apply
    if(!isContainSelected(expressShip)){
        freeShip.classList.remove('selected');
        expressShip.classList.add('selected');
        
    }
})