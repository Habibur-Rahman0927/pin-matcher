function getpin() {
    const randomInputValue = document.getElementById('randomInput');
    randomInputValue.value = getRandomNumber();
};
function getRandomNumber() {
    const randomNumber = Math.random() * 10000
    const randomDigit = (randomNumber + '').split('.')[0];
    if (randomDigit.length === 4) {
        return randomDigit;
    } else {
        console.log(randomDigit)
        return getRandomNumber();
    }
};
const digitCount = document.getElementById('digit-container');
digitCount.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {

        if (digit === 'B') {
            //handle back
        }
        //handle clear
        if (digit === 'C') {
            document.getElementById('digit-input').value = "";
        }
    } else {
        const digitInput = document.getElementById('digit-input');
        digitInput.value = digitInput.value + digit;
    }
});
function matchPin() {
    const randomInputValue = document.getElementById('randomInput').value;
    const digitInput = document.getElementById('digit-input').value;
    if (randomInputValue === digitInput) {
        displayMatchResult('block', "none")
    } else {
        displayMatchResult('none', 'block')
    }
};
function displayMatchResult(block, none) {
    const notifyMatch = document.getElementById('notifyMatchRight');
    notifyMatch.style.display = block;
    const notifyMatchWrong = document.getElementById('notifyMatchWrong');
    notifyMatchWrong.style.display = none;
};