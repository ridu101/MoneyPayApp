const validNumber = 8801878710317;
const validPin = 3119;

function getAmountValue(id) {
    const value = document.getElementById(id).value;
    const amountEntered = parseInt(value);
    return amountEntered
}

function getPinValue(id) {
    const value = document.getElementById(id).value;
    const pinEntered = parseInt(value);
    return pinEntered
}

function getAccountNumber(id) {
    const value = document.getElementById(id).value;
    const accountNumberEntered = parseInt(value);
    return accountNumberEntered
}


document.getElementById('btn-add')
    .addEventListener('click', function (e) {
        e.preventDefault()
        const bank = document.getElementById('bank').value;
        const accountNumber = getAccountNumber('bank-account-number');
        const amountNumber = getAmountValue('add-amount');
        const pinNumber = getPinValue('pin-number');

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
        document.getElementById('transfer-container').style.display = 'none';
        document.getElementById('add-money-parent').style.display = 'block';

    })
document.getElementById('cash-out-btn')
    .addEventListener('click', function () {
        document.getElementById('add-money-parent').style.display = 'none';
        document.getElementById('transfer-container').style.display = 'none';
        document.getElementById('cash-out-parent').style.display = 'block';

    })

document.getElementById('transfer-btn')
    .addEventListener('click', function () {

        document.getElementById('cash-out-parent').style.display = 'none';
        document.getElementById('add-money-parent').style.display = 'none';
        document.getElementById('transfer-container').style.display = 'block';
    })

// withdraw button event handler

document.getElementById('withdraw-btn')
    .addEventListener('click', function () {
        const availableBalance = parseInt(document.getElementById('avail-balance').innerText)
        const withdrawAmount = getAmountValue('with-amount');
        const accountNumber = getAccountNumber('bank-number');
        const pinNumber = getPinValue('pin-number');

        if (accountNumber != validNumber) {
            alert('Enter valid account Number')
        }
        if (pinNumber != validPin) {
            alert('Enter valid pin')
        }
        if (availableBalance < withdrawAmount) {
            alert('Insufficient Balance');
            return;
        }
        const amountAfterWithdraw = availableBalance - withdrawAmount;

        document.getElementById('avail-balance').innerText = amountAfterWithdraw;
    })
// send now button event handler

document.getElementById('send-btn').addEventListener('click', function(){
    const availableBalance = parseInt(document.getElementById('avail-balance').innerText);
    const transferAmount = getAmountValue('transfer-amount');
    const accountNumber = getAccountNumber('user-number');
    const pinNumber = getPinValue('pin-number-transfer'); // correct id

    if (accountNumber != validNumber) {
        alert('Enter valid account Number');
        return;
    }
    if (pinNumber != validPin) {
        alert('Enter valid pin');
        return;
    }
    if (availableBalance < transferAmount) {
        alert('Insufficient Balance');
        return;
    }

    const amountAfterTransfer = availableBalance - transferAmount;
    document.getElementById('avail-balance').innerText = amountAfterTransfer;
});
