

const exchangeRate = 23208;

const currency = prompt("choose your currency?")
let amount = 0;

// usdVnd = 23208
// vndUsd = 1/usdVnd

// vnd to usd //
function vndToUsd() {
    const convertedAmount = (amount / exchangeRate).toFixed(2);
    console.log("vnd to usd", convertedAmount)
    return formatCurrency('usd', convertedAmount);
}

// usd to vnd //
function usdToVnd() {
    const convertedAmount = (amount * exchangeRate).toFixed(2);
    console.log("usd to vnd", convertedAmount)
    return formatCurrency('usd', convertedAmount);
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }


if (currency==="vnd") {
    amount = prompt ("amount of money?")
    while(isNaN(amount)===true){
        alert("you should type number ");
        amount = prompt ("amount of money?")
    } 
    alert(vndToUsd());
    
 

} else if (currency==="usd"){
    amount = prompt ("amount of money?")
    while(isNaN(amount)===true){
        alert("you should type number!");
         amount = prompt ("amount of money?")
    } 
        alert(usdToVnd());
    
    
} else {
    alert("wrong input my man try again ; )")
    console.log ("wrong input")
    amount = prompt ("amount of money?")
}





