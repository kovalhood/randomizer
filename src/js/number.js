const randomizeButton = document.querySelector('.randomize__button--generate');
const clearButton = document.querySelector('.randomize__button--clear');
const resetButton = document.querySelector('.randomize__button--reset');

const inputFrom = document.querySelector('#random-from');
const inputTo = document.querySelector('#random-to');
const inputAmount = document.querySelector('#random-amount');

const numberWrapper = document.querySelector('.randomize__number-wrapper');
const textBeforeNumber = document.querySelector('.randomize__number-text');
const randomNumberEl = document.querySelector('.randomize__number');

let generatedNumbers = [];

randomizeButton.addEventListener('click', handleRandomize);
clearButton.addEventListener('click', handleClear);
resetButton.addEventListener('click', handleReset);

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleRandomize() {
    numbersGeneration(inputFrom.value, inputTo.value, inputAmount.value);
    generatedNumbers = [];
}

function handleClear() {
    randomNumberEl.textContent = '0';
    numberWrapper.classList.add('hidden');
}

function handleReset() {
    randomNumberEl.textContent = '0';
    numberWrapper.classList.add('hidden');

    inputFrom.value = 1;
    inputTo.value = 10;
    inputAmount.value = 1;
}

function numbersGeneration(from, to, amount) {
    if (to - from + 1 - amount < 0) {
        handleClear();
        return console.log('error');
    }

    numberWrapper.classList.remove('hidden');

    for (let i = 0; i < amount; i+=1) {
        let includesNumber = true;
        let randomNumber;

        while (includesNumber) {
            // while operator stops execution when includesNumber = false, 
            // and then number pushes into array generatedNumbers
            randomNumber = getRandomNumber(from, to);
            includesNumber = generatedNumbers.includes(randomNumber);
        }

        generatedNumbers.push(randomNumber);
        randomNumberEl.textContent = generatedNumbers.join(', ');
    }
    textBeforeNumberHandler();
}

function textBeforeNumberHandler() {
    if (generatedNumbers.length > 1) {
        return textBeforeNumber.textContent = 'Your numbers: ';
    }
    
    textBeforeNumber.textContent = 'Your number: ';
}
