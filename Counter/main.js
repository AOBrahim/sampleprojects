const value= 1;
const minus=document.querySelector('#minus');
const minus=document.querySelector('#plus');


/**
 * @type {HTMLInputElement|null}
 */

const input = document.querySelector("input[type=text]");
 
function displayValue() {
    if (input !=null) {
        input.value = String(value);
    }
}

minus?.addEventListener('click', function handMinusClick(){
    const newValue = value - 1;
    displayValue();
});

plus?.addEventListener('click', function handMinusClick(){
    const newValue = value + 1;
    displayValue();
});