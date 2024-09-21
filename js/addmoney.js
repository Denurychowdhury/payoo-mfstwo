/**
 * How to get a number from input field
 * 1.create a variable
 * 2.right side document.getElementById(id)
 * 3.  .value
 * 4.parsefloat
 */

// console.log('add money loaded')

document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();


        // const addMoney = getInputFieldValueById('input-add-money')
        // console.log('add munny button clicked',addMoney)

        const addMoney = getInputFieldValueById('input-add-money')
        const pinNumber = getInputFieldValueById('input-pin-number')
        console.log('add money with parameters',addMoney,pinNumber)

    })