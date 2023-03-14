// Variables

let kgButton = document.getElementById('kg');
let poundButton = document.getElementById('pound');
let euroButton = document.getElementById('euro');
let dollarButton = document.getElementById('dollar');
let celsiusButton = document.getElementById('celsius');
let fahrenheitButton = document.getElementById('fahrenheit');

/// Weight converter

//Kilograms
kgButton.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = (input / 2.205);
})

//Pounds
poundButton.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = (input * 2.205);
})

/// Currency converter

//Euros
euroButton.addEventListener('click', function(){
    let input2 = document.getElementById('input2').value;
    document.getElementById('output2').value = (input2 / 0.93);
})

//Dollars
dollarButton.addEventListener('click', function(){
    let input2 = document.getElementById('input2').value;
    document.getElementById('output2').value = (input2 * 1.07);
})

/// Celsius and Fahrenheit converter

// Celsius
celsiusButton.addEventListener('click', function(){
    let input3 = document.getElementById('input3').value;
    document.getElementById('output3').value = ((input3 - 32) * 5 / 9);
})

// Fahrenheit
fahrenheitButton.addEventListener('click', function(){
    let input3 = document.getElementById('input3').value;
    document.getElementById('output3').value = ((input3 * 9 / 5) + 32);
})





