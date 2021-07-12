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
    document.getElementById('phonePrice').innerText = currentPhonePrice;
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