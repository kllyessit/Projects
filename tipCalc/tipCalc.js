function calculation() {
    try {
        // Retrieving element where calculation will be displayed
        const calculationDisplay = document.getElementById('amount');

        //Retrieving value being passed through for bill and # of people
        const bill = document.getElementById('billAmount').value;
        let numPeople = document.getElementById('amountOfPeople').value;

        // Tip selected by user
        const tip = document.getElementsByClassName('tipAmount')[0];
        const tipSelected =  tip.options[tip.selectedIndex].value;

        // If user doesnt have any input, will return alert error
        if (bill === ''|| tipSelected === '-- Choose an Option --') {
            alert('Please enter bill amount and tip selection')
        }

        // Checking to see if there is a value for amount of people
        // If not then numPeople is defaulted to 1
        if (numPeople === '' || numPeople <= 1){
            numPeople = 1;
        }

        //Calculating Total
        let total = (bill * tipSelected)/numPeople;
        total = total.toFixed(2);

        // Displaying total amount in amount div
        if (numPeople > 1){
            calculationDisplay.innerText = 'Tip Amount \n $' + total + ' each';
        } else {
            calculationDisplay.innerText = 'Tip Amount \n' + total;
        }
    } catch (e) {
        alert(e)
    }
}
