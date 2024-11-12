//fetch a random quote from the API Ninjas Quotes API
fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
    headers: { 'X-Api-Key': 'k3leQtmeOp2QMg0ueEpTUw==cqYetIwrfqzseikQ' }
})
.then(response => response.json())
.then(data => {
    //select the element and display the quote
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = `Quote of The Day: "${data[0].quote}"`;
})
.catch(error => {
    console.error('Error fetching the quote:', error);
});

//select all the detail buttons
const detailButtons = document.querySelectorAll('.details-btn');

//loop through each button and add a click event listener to each
detailButtons.forEach(button => {
    button.addEventListener('click', () => {
        //find the sibling project details div
        const projectDetails = button.nextElementSibling;

        //if details are visible then hide the details and change button text to "Show Details"
        if (projectDetails.style.display === 'block') {
            projectDetails.style.display = 'none';
            button.textContent = 'Show Details';
        //if details are hidden, show details and change button text to "Hide Button"
        } else {
            projectDetails.style.display = 'block';
            button.textContent = 'Hide Details';
        }
    });
});

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

//event listener for form submission
form.addEventListener('submit', function (event) {
    let formIsValid = true;

    //check if name is empty or contains invalid characters and display error message if needed
    const namePattern = /^[A-Za-z\s]+$/;
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Please enter your name.');
        formIsValid = false;
    } else if (!namePattern.test(nameInput.value)) {
        showError(nameInput, 'Name can only contain letters and spaces.');
        formIsValid = false;
    } else {
        clearError(nameInput);
    }

    //check if email is empty or invalid and display error message if needed
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Please enter your email.');
        formIsValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address.');
        formIsValid = false;
    } else {
        clearError(emailInput);
    }

    //check if message is empty
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Please enter a message.');
        formIsValid = false;
    } else {
        clearError(messageInput);
    }

    //prevent form submission if any validation failed
    if (!formIsValid) {
        event.preventDefault();
    }
});

//functions to show and clear error messages
function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
}

function clearError(input) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = '';
}