document.getElementById('show-add-money-form')
    .addEventListener('click', function () {
        console.log('show add money button clicked')
        showSectionById('add-money-from')
    })
document.getElementById('show-cash-out-section')
    .addEventListener('click', function () {
        showSectionById('cash-out-form')
    })
document.getElementById('show-transaction-history')
    .addEventListener('click', function () {
        showSectionById('transaction-section')
    })