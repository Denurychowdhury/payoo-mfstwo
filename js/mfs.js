document.getElementById('button-login')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // get phone number and pin
        const phoneNumber = document.getElementById('phone-number').value;
        const pinCode = document.getElementById('pin-code').value;
        // console.log(phoneNumber , pinCode)

        // bad way to validate
        if (phoneNumber === '5' && pinCode === '1234') {
            console.log('You Can youse Website')
            window.location.href = './home.html';
        }
        else {
            alert('wrong phone number or pin')
        }
})