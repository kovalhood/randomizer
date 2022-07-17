const inputs = document.getElementsByClassName('js-fake-input');
const selects = document.getElementsByClassName('js-select');

// All of that is created for centering text in select field on iOS Safari
for (let i = 0; i < inputs.length; i++) {
    getSelected(i);

    selects[i].addEventListener("change", function() {
    getSelected(i);
    });
}

function getSelected(i){
    inputs[i].value = selects[i].options[selects[i].selectedIndex].text;
}