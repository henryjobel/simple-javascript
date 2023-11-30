document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawField = document.getElementById('withdraw-field');

    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawtTotalElements = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawtTotalElements.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);

    withdrawField.value = '';

    const blanceTotalElement =document.getElementById('balance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);
    
    if(newWithdrawAmount > previousBlanceTotal){
        alert('Unsaficient Blance');
        return;
    }

    const currentWithdrawtotal = withdrawTotal + newWithdrawAmount ;

    withdrawtTotalElements.innerText = currentWithdrawtotal ;

    const currentBlanceTotal = previousBlanceTotal -  newWithdrawAmount;

    blanceTotalElement.innerText = currentBlanceTotal;


    
})