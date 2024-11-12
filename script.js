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