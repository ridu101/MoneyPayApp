const validNumber = 8801878710317;
const validPin = 3119;

function getAmountValue(id){
    const inputFiled= document.getElementById(id);
    const inputFiledValue= inputFiled.value;
    const inputFieldValueNumber= parseInt(inputFiledValue);
    return inputFieldValueNumber;

}


document.getElementById('btn-add')
    .addEventListener('click', function (e) {
        e.preventDefault()
        const bank = document.getElementById('bank').value;
        const accountNumber = parseInt(document.getElementById('bank-account-number').value);
        const amountNumber =getAmountValue('add-amount');
        const pinNumber = parseInt(document.getElementById('pin-number').value);

        if (accountNumber != validNumber) {
            alert('Provide Correct Number')
            return;
        }
        if (pinNumber != validPin) {
            alert('Provide Correct Pin');
            return;
        }

        // accessioning the available balance 
        const availableBalance = parseInt(document.getElementById('avail-balance').innerText);

        const totalBalance = amountNumber + availableBalance;

        document.getElementById('avail-balance').innerText = totalBalance;


    })
// toggling feature
document.getElementById('add-money-btn')
    .addEventListener('click', function () {
        document.getElementById('cash-out-parent').style.display = 'none';
        document.getElementById('add-money-parent').style.display = 'block';

    })
document.getElementById('cash-out-btn')
    .addEventListener('click', function () {
        document.getElementById('add-money-parent').style.display = 'none';
        document.getElementById('cash-out-parent').style.display = 'block';

    })
// withdraw button event handler

document.getElementById('withdraw-btn')
    .addEventListener('click', function () {
        const availableBalance = parseInt(document.getElementById('avail-balance').innerText)
        const withdrawAmount = getAmountValue('with-amount');
        const accountNumber = parseInt(document.getElementById('bank-number').value)
        const pinNumber = parseInt(document.getElementById('pin-number-withdraw').value );
        if (accountNumber != validNumber) {
            alert('Enter valid account Number')
        }
        if (pinNumber != validPin) {
            alert('Enter valid pin')
        } 
        if( availableBalance < withdrawAmount){
            alert('Insufficient Balance');
            return ;
        }
        const amountAfterWithdraw = availableBalance - withdrawAmount;

        document.getElementById('avail-balance').innerText = amountAfterWithdraw;
    })