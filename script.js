// Get reference to the input field and all buttons
let input = document.getElementById('display');
let buttons = document.querySelectorAll('.number');

// Initialize string to store current input
let string = "";

// Loop through each button and attach click event listener
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Handle different button clicks
        if (e.target.id === 'equal') {
            // If equal button is clicked, evaluate the expression and display result
            string = eval(string);
        } else if (e.target.id === 'calculation') {
            // If clear button is clicked, clear the input field
            string = "";
        } else if (e.target.id === 'delete') {
            // If delete button is clicked, remove the last character from input
            string = string.substring(0, string.length - 1);
        } else {
            // For other buttons, append their value to the input
            string += e.target.value;
        }
        
        // Update the input field with the current input string
        input.value = string;
    });
});
