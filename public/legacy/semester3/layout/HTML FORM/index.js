
function showOtherInput(e) {


    var otherInput = document.getElementById("otherInput");

    // Show the "other" input field only if the "other" radio button is selected
    if (e.target.value === 'other') {
        otherInput.style.display = "block"; // Show the input field
    } else {
        otherInput.style.display = "none"; // Hide the input field
    }
}

// Attach event listeners to all radio buttons
document.querySelectorAll('input[name="heard"]').forEach((radio) => {
    radio.addEventListener('change', showOtherInput, false);
});