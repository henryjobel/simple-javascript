document.getElementById('btn-deposit').addEventListener("click", function(){

    const dipsitField = document.getElementById('deposit-field');
    const newDipositAmountString = dipsitField.value;
    const newDipositAmount = parseFloat(newDipositAmountString)

    //get dipsit total
    const dipsitTotalElement = document.getElementById('deposit-total');
    const previousDipsitTotalString = dipsitTotalElement.innerText;
    const previousDipsitTotal = parseFloat(previousDipsitTotalString);
    

    const currentDipositTotal = previousDipsitTotal + newDipositAmount

    dipsitTotalElement.innerText = currentDipositTotal


    //step number 5 het blamce current total
    const blanceTotalElement =document.getElementById('balance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);

    const currentBlanceTotal = previousBlanceTotal +  newDipositAmount;

    blanceTotalElement.innerText = currentBlanceTotal;

    //clear the object
    dipsitField.value = '';


})