// login button functionality

document.getElementById('btn-login')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const mobileNumber = 8801878710317;
        const pin = 3119;

        const mobileNumberValue = document.getElementById('mobile-number').value
        const mobileNumberConverted = parseInt(mobileNumberValue);
        const pinNumberValue = document.getElementById('pin-number').value
        const pinNumberValueConverted = parseInt(pinNumberValue);

        if (mobileNumber === mobileNumberConverted && pin === pinNumberValueConverted) {
            window.location.href = "./home.html"
        }

        else {
            alert("Invalid Credentials");
        }


    })