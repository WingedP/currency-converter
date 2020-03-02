

const exchangeRate = 23208;

const currency = prompt("Currency: VND or USD?")
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
    return formatCurrency('vnd', convertedAmount);
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }


if (currency==="VND") {
    amount = prompt ("amount of money?")
    while(isNaN(amount)===true){
        alert("you should type number ");
        amount = prompt ("amount of money?")
    } 
    alert(vndToUsd());
    
 

} else if (currency==="USD"){
    amount = prompt ("amount of money?")
    while(isNaN(amount)===true){
        alert("you should type number!");
         amount = prompt ("amount of money?")
    } 
        alert(usdToVnd());
    
    
} else {
    alert("Wrong input. Press F5 and do it again please, since I don't know how to loop it back to currency prompt using (a) function or (b) while :( ")
    console.log ("wrong input")

}





