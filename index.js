// Plus Button Event Handler for Phone...
document.getElementById('plusBtn').addEventListener('click', function () {
    // Current phone quantity
    const quantity = document.getElementById('quantity').value;
    const quantityNumber = parseFloat(quantity);
    const increaseQuantity = quantityNumber + 1;
    document.getElementById('quantity').value = increaseQuantity;

    // Current Phone price
    const phonePrice = document.getElementById('phonePrice').innerText;
    const phonePriceNumber = parseFloat(phonePrice);
    const currentPhonePrice = phonePriceNumber + 1219;
    const totalPhonePrice = document.getElementById('phonePrice').innerText = currentPhonePrice;
})
// Minus Button Event Handler for Phone...
document.getElementById('minusBtn').addEventListener('click', function () {
    // Current phone quantity
    const quantity = document.getElementById('quantity').value;
    const quantityNumber = parseFloat(quantity);
    if (quantityNumber == 1) {
        document.getElementById('quantity').value = 1;
    }
    else {
        const decreaseQuantity = quantityNumber - 1;
        const currentQuantity = document.getElementById('quantity').value = decreaseQuantity;
        const phonePrice = document.getElementById('phonePrice').innerText;
        const phonePriceNumber = parseFloat(phonePrice);
        const currentPhonePrice = phonePriceNumber - 1219;
        document.getElementById('phonePrice').innerText = currentPhonePrice;
    }
})

// Plus Button Event Handler for Case...
document.getElementById('plus').addEventListener('click', function () {
    // current phone case quantity
    const quantity = document.getElementById('caseQuantity').value;
    const quantityNumber = parseFloat(quantity);
    const increaseQuantity = quantityNumber + 1;
    document.getElementById('caseQuantity').value = increaseQuantity;

    // Current Phone case price
    const casePrice = document.getElementById('casePrice').innerText;
    const casePriceNumber = parseFloat(casePrice);
    const currentCasePrice = casePriceNumber + 59;
    document.getElementById('casePrice').innerText = currentCasePrice;
})
// Minus Button Event Handler for Case...
document.getElementById('minus').addEventListener('click', function () {
    // current phone case quantity
    const quantity = document.getElementById('caseQuantity').value;
    const quantityNumber = parseFloat(quantity);

    if (quantityNumber == 1) {
        document.getElementById('caseQuantity').value = 1;
    }
    else {
        const decreaseQuantity = quantityNumber - 1;
        const currentQuantity = document.getElementById('caseQuantity').value = decreaseQuantity;
        const casePrice = document.getElementById('casePrice').innerText;
        const casePriceNumber = parseFloat(casePrice);
        const currentCasePrice = casePriceNumber - 59;
        document.getElementById('casePrice').innerText = currentCasePrice;
    }
})

//check out button event Handler
document.getElementById('checkoutBtn').addEventListener('click', function(){
    const phonePrice = document.getElementById('phonePrice').innerText;
    const phonePriceNumber = parseFloat(phonePrice);
    const casePrice = document.getElementById('casePrice').innerText;
    const casePriceNumber = parseFloat(casePrice);
    // subtotal price
    const subtotal = phonePriceNumber + casePriceNumber;
    const subtotalAmount = document.getElementById('subtotalAmount').innerText = subtotal;
    const subtotalAmountNumber = parseFloat(subtotalAmount);
    // tax amount
    const tax = (subtotal * 0.05).toFixed(2);
    const taxAmount = document.getElementById('tax').innerText = tax;
    const taxAmountNumber = parseFloat(taxAmount);
    // total amount
    const totalAmount = (subtotalAmountNumber + taxAmountNumber).toFixed(2);
    document.getElementById('totalAmount').innerText = totalAmount;
})