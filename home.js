// pre declared number, pin, bonus 
const validNumber = 8801878710317;
const validPin = 3119;
const bonusCode = 'hiya50'
const transactionData = [];

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


// toggling function handler
function handleToggle(id) {
    const events = document.getElementsByClassName('events');
    for (const event of events) {
        event.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

// activation button style function
function activateStyle(id) {

    const fromBtn = document.getElementsByClassName('forms-btn');
    for (const btn of fromBtn) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f230]");
        btn.classList.add("border-[#0874f20d]", "bg-[#f4f5f7]");
    }

    document.getElementById(id).classList.remove("border-[#0874f20d]", "bg-[#f4f5f7]");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f230]");

}

//****************** */ transaction section features showing ****************
document.getElementById('transaction-btn')
    .addEventListener('click', function () {
        const transactionCartContainer = document.getElementById('transaction-cart-container');

        transactionCartContainer.innerText = "";

        for (const data of transactionData) {
            const div = document.createElement("div")
            div.innerHTML = `
        
                <div class="border-2 bg-white rounded-xl flex items-center justify-between  p-2 mt-3 ">
                        <div class="flex items-center  gap-2 ">
                            <div class="p-2 rounded-full bg-[#f4f5f7]">
                                <img src="./assets/transaction1.png" alt="">
                            </div>
                            <div>
                                <h1>${data.name}</h1>
                                <p>${data.date}</p>
                            </div>

                        </div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
        `
            transactionCartContainer.appendChild(div)

        }
    })

    // 
// toggling feature
document.getElementById('add-money-btn')
    .addEventListener('click', function () {
        handleToggle('add-money-parent')
        activateStyle('add-money-btn');

    })

document.getElementById('cash-out-btn')
    .addEventListener('click', function () {
        handleToggle('cash-out-parent')
        activateStyle('cash-out-btn');


    })

document.getElementById('transfer-btn')
    .addEventListener('click', function () {
        handleToggle('transfer-container')
        activateStyle('transfer-btn');

    })
document.getElementById('get-bonus-btn')
    .addEventListener('click', function () {
        handleToggle('bonus-container');
        activateStyle('get-bonus-btn');
    })
document.getElementById('pay-button')
    .addEventListener('click', function () {
        handleToggle('pay-bill-container');
        activateStyle('pay-button');
    })
document.getElementById('transaction-btn')
    .addEventListener('click', function () {
        handleToggle('transaction-container');
        activateStyle('transaction-btn');
    })


//  add button event handler
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
        document.getElementById('add-money-modal').checked = true;
        // transaction Showing
        const data = {
            name: "Add money",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data);
        console.log(transactionData)

    })

// withdraw button event handler

document.getElementById('withdraw-btn')
    .addEventListener('click', function () {
        const availableBalance = parseInt(document.getElementById('avail-balance').innerText)
        const withdrawAmount = getAmountValue('with-amount');
        const accountNumber = getAccountNumber('bank-number');
        const pinNumber = getPinValue('pin-number-withdraw');

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
        document.getElementById('cash-out-modal').checked = true;
        // transaction showing
        const data = {
            name: "Cash out",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data);
        console.log(transactionData);
    })

// send now button event handler

document.getElementById('send-btn').addEventListener('click', function () {
    const availableBalance = parseInt(document.getElementById('avail-balance').innerText);
    const transferAmount = getAmountValue('transfer-amount');
    const accountNumber = getAccountNumber('user-number');
    const pinNumber = getPinValue('pin-number-transfer');

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
    document.getElementById('transfer-modal').checked = true;
    // transaction Showing
    const data = {
        name: "Transfer Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
    console.log(transactionData)
})

// get bonus button event handler
document.getElementById('bonus-btn')
    .addEventListener('click', function () {
        const availableBalance = parseInt(document.getElementById('avail-balance').innerText);
        const couponInput = document.getElementById('coupon-code-input').value;

        if (couponInput === bonusCode) {
            const newBalance = availableBalance * 50;
            const totalBonus = newBalance / 100;
            const afterBonusTotalAmount = availableBalance + totalBonus;
            document.getElementById('avail-balance').innerText = afterBonusTotalAmount;
            document.getElementById('bonus-modal').checked = true;
        }
        else {
            alert('⚠️Enter Correct Coupon Code !!')
        }
        // transaction Showing
        const data = {
            name: "Bonus Get",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data);
        console.log(transactionData)
    })

// payNow button event handler
document.getElementById('pay-btn')
    .addEventListener('click', function () {
        const availableBalance = parseInt(document.getElementById('avail-balance').innerText)
        const payAmount = getAmountValue('pay-amount');
        const payAccountNumber = getAccountNumber('biller-acc-number');
        const pinNumber = getPinValue('pay-pin');

        if (payAccountNumber != validNumber) {
            alert('Enter valid account Number')
        }
        if (pinNumber != validPin) {
            alert('Enter valid pin')
        }
        if (availableBalance < payAmount) {
            alert('Insufficient Balance');
            return;
        }
        const amountAfterPay = availableBalance - payAmount;

        document.getElementById('avail-balance').innerText = amountAfterPay;
        document.getElementById('payment-modal').checked = true;
        // transaction Showing
        const data = {
            name: "Pay Bill",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data);
        console.log(transactionData)

    })