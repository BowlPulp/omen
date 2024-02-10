document.getElementById('moneyWashingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Your logic to check availability goes here
    var name = document.getElementById('name').value;
    var cityNumber = document.getElementById('cityNumber').value;
    var date = document.getElementById('date').value;
    var slotName = document.getElementById('slotName').value;
    var amount = parseFloat(document.getElementById('amount').value);

    // Calculate remaining amount
    var remainingAmount = 2000000 - amount;

    // Check if the amount exceeds the limit per tsunami
    if (amount <= 2000000) {
        // Format the amount to US format
        var formattedAmount = amount.toLocaleString('en-US');
        var formattedRemainingAmount = remainingAmount.toLocaleString('en-US');

        // Show confirmation message
        var resultDiv = document.getElementById('availabilityResult');
        resultDiv.innerHTML = `
            <p>Hello ${name},</p>
            <p>Your money washing slot for ${date} is available!</p>
            <p>Slot: ${slotName}</p>
            <p>Amount: $${formattedAmount}</p>
            <p>Remaining Amount: $${formattedRemainingAmount}</p>
            <p>You are eligible to wash.</p>
        `;
    } else {
        // Show error message if the amount exceeds the limit per tsunami
        var resultDiv = document.getElementById('availabilityResult');
        resultDiv.innerHTML = `
            <p>Sorry, the amount exceeds the limit per tsunami ($2M).</p>
        `;
    }
});