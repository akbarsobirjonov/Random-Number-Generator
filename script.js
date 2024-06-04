// Function to generate random numbers
function generateRandomNumber() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        document.getElementById('result').textContent = 'Please enter valid numbers with min < max.';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').textContent = randomNumber;
}

// Setting styles for <h1> elements
const h1Elements = document.querySelectorAll('h1');
h1Elements.forEach(element => {
    element.style.marginBottom = '20px';
});

// Setting styles for elements with class "input-group"
const inputGroups = document.querySelectorAll('.input-group');
inputGroups.forEach(element => {
    element.style.marginBottom = '15px';
});

// Setting styles for <label> elements
const labelElements = document.querySelectorAll('label');
labelElements.forEach(element => {
    element.style.marginRight = '10px';
});

// Setting styles for <input> elements
const inputElements = document.querySelectorAll('input');
inputElements.forEach(element => {
    element.style.padding = '5px';
    element.style.fontSize = '1em';
    element.style.width = '100px';
});

// Setting styles for <button> elements
const buttonElements = document.querySelectorAll('button');
buttonElements.forEach(element => {
    element.style.padding = '10px 20px';
    element.style.fontSize = '1em';
    element.style.border = 'none';
    element.style.borderRadius = '5px';
    element.style.backgroundColor = '#007bff';
    element.style.color = 'white';
    element.style.cursor = 'pointer';
    
    // Adding hover effect using JavaScript
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = '#0056b3';
    });
    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = '#007bff';
    });
});

// Setting styles for elements with class "output"
const outputElements = document.querySelectorAll('.output');
outputElements.forEach(element => {
    element.style.marginTop = '20px';
});

// Setting styles for element with id "result"
const resultElement = document.getElementById('result');
resultElement.style.fontSize = '2em';
resultElement.style.color = '#333';
