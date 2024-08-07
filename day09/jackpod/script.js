document.getElementById('spinButton').addEventListener('click', spin);

function spin() {
    const slotElements = document.querySelectorAll('.slot');
    const resultElement = document.getElementById('result');

    const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇'];
    let slots = [];

    // Generate random symbols for each slot
    slotElements.forEach((slot, index) => {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        slot.textContent = randomSymbol;
        slots.push(randomSymbol);
    });

    // Check if all slots have the same symbol
    const isJackpot = slots.every(symbol => symbol === slots[0]);

    if (isJackpot) {
        resultElement.textContent = '🎉 Jackpot! You win! 🎉';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Try again!';
        resultElement.style.color = 'red';
    }
}
