document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const depositButton = document.getElementById('deposit-button');
    const withdrawButton = document.getElementById('withdraw-button');
    const depositInput = document.getElementById('deposit-amount');
    const withdrawInput = document.getElementById('withdraw-amount');
    
    let balance = 1000;

    function updateBalance() {
        balanceElement.textContent = balance.toFixed(2);
    }

    depositButton.addEventListener('click', () => {
        const depositAmount = parseFloat(depositInput.value);
        if (!isNaN(depositAmount) && depositAmount > 0) {
            balance += depositAmount;
            updateBalance();
            depositInput.value = '';
        }
    });

    withdrawButton.addEventListener('click', () => {
        const withdrawAmount = parseFloat(withdrawInput.value);
        if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
            if (withdrawAmount > balance) {
                alert('Insufficient funds!');
            } else {
                balance -= withdrawAmount;
                updateBalance();
            }
            withdrawInput.value = '';
        }
    });

    // Initialize balance display
    updateBalance();
});
