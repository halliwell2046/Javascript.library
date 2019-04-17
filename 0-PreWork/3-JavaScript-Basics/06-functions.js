function calculatePriceNewComputer(amount, price){
    var tax = 0.10;
    var totalTax = amount * price * tax;
    var totalPrice = totalTax + amount * price;
    console.log(totalPrice);
    return totalPrice;
}

calculatePriceNewComputer(25, 30);