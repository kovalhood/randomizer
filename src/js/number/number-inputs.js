import { inputFrom, inputTo, inputAmount, sortType, duplicatesCheckbox, quantity } from './refs';
import { fromMin, fromMax, toMin, toMax, amountMin, amountMax } from './limits';

quantity.fromRemove.addEventListener('click', handleFromRemoveClick);
quantity.fromAdd.addEventListener('click', handleFromAddClick);
quantity.toRemove.addEventListener('click', handleToRemoveClick);
quantity.toAdd.addEventListener('click', handleToAddClick);
quantity.amountRemove.addEventListener('click', handleAmountRemoveClick);
quantity.amountAdd.addEventListener('click', handleAmountAddClick);

// From quantity buttons
function handleFromRemoveClick() {
    inputFrom.value = Number(inputFrom.value) - 1;

    if (inputFrom.value == fromMin) {
        quantity.fromRemove.classList.remove('randomize__quantity');
        quantity.fromRemove.classList.add('randomize__quantity--disabled');
        return quantity.fromRemove.disabled = true;
    }

    if (inputFrom.value <= fromMax - 1) {
        quantity.fromAdd.classList.add('randomize__quantity');
        quantity.fromAdd.classList.remove('randomize__quantity--disabled');
        quantity.fromAdd.disabled = false;
    }
}

function handleFromAddClick() {
    inputFrom.value = Number(inputFrom.value) + 1;

    if (inputFrom.value >= fromMin + 1) {
        quantity.fromRemove.classList.add('randomize__quantity');
        quantity.fromRemove.classList.remove('randomize__quantity--disabled');
        quantity.fromRemove.disabled = false;
    }

    if (inputFrom.value == fromMax) {
        quantity.fromAdd.classList.remove('randomize__quantity');
        quantity.fromAdd.classList.add('randomize__quantity--disabled');
        quantity.fromAdd.disabled = true;
    }
}

// To quantity buttons
function handleToRemoveClick() {
    inputTo.value = Number(inputTo.value) - 1;

    if (inputTo.value == toMin) {
        quantity.toRemove.classList.remove('randomize__quantity');
        quantity.toRemove.classList.add('randomize__quantity--disabled');
        return quantity.toRemove.disabled = true;
    }

    if (inputTo.value <= toMax - 1) {
        quantity.toAdd.classList.add('randomize__quantity');
        quantity.toAdd.classList.remove('randomize__quantity--disabled');
        quantity.toAdd.disabled = false;
    }
}

function handleToAddClick() {
    inputTo.value = Number(inputTo.value) + 1;

    if (inputTo.value >= toMin + 1) {
        quantity.toRemove.classList.add('randomize__quantity');
        quantity.toRemove.classList.remove('randomize__quantity--disabled');
        quantity.toRemove.disabled = false;
    }

    if (inputTo.value == toMax) {
        quantity.toAdd.classList.remove('randomize__quantity');
        quantity.toAdd.classList.add('randomize__quantity--disabled');
        quantity.toAdd.disabled = true;
    }
}

// Amount quantity buttons
function handleAmountRemoveClick() {
    inputAmount.value = Number(inputAmount.value) - 1;

    if (inputAmount.value == amountMin) {
        quantity.amountRemove.classList.remove('randomize__quantity');
        quantity.amountRemove.classList.add('randomize__quantity--disabled');
        return quantity.amountRemove.disabled = true;
    }

    if (inputAmount.value <= amountMax - 1) {
        quantity.amountAdd.classList.add('randomize__quantity');
        quantity.amountAdd.classList.remove('randomize__quantity--disabled');
        quantity.amountAdd.disabled = false;
    }
}

function handleAmountAddClick() {
    inputAmount.value = Number(inputAmount.value) + 1;

    if (inputAmount.value >= amountMin + 1) {
        quantity.amountRemove.classList.add('randomize__quantity');
        quantity.amountRemove.classList.remove('randomize__quantity--disabled');
        quantity.amountRemove.disabled = false;
    }

    if (inputAmount.value == amountMax) {
        quantity.amountAdd.classList.remove('randomize__quantity');
        quantity.amountAdd.classList.add('randomize__quantity--disabled');
        quantity.amountAdd.disabled = true;
    }
}