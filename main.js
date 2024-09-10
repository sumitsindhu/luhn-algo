function validateInput(input) {
    // Remove non-digit characters and limit to 16 digits
    const sanitizedValue = input.value.replace(/\D/g, '').slice(0, 16);
    input.value = sanitizedValue;

    if (sanitizedValue.length === 16) {
        let totalSum = 0;
        for (let i = sanitizedValue.length - 1; i >= 0; i--) {
            let digit = parseInt(sanitizedValue[i], 10);
            // Double every second digit from the right
            if ((sanitizedValue.length - i) % 2 === 0) {
                digit *= 2;
                if (digit > 9) {
                    digit = Math.floor(digit / 10) + (digit % 10);
                }
            }
            totalSum += digit;
        }
        showMessage(totalSum % 10 === 0 ? 'success' : 'failure');
    } else {
        showMessage('');
    }
}

function showMessage(type) {
    const message = document.getElementById('message');
    if (type === 'success') {
        message.textContent = 'Success: The number is valid!';
        message.className = 'message success';
    } else if (type === 'failure') {
        message.textContent = 'Failure: The number is not valid!';
        message.className = 'message failure';
    } else {
        message.textContent = ''; // Clear message
        message.className = 'message';
    }
}
