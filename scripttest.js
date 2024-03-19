document.addEventListener("DOMContentLoaded", function () {
    // Get the instructions button and popup
    var instructionsBtn = document.getElementById("instructions_button");
    var instructionsPopup = document.getElementById("instructions_popup");
    var menu = document.querySelector(".menu");

    // When the instructions button is clicked, show the popup
    instructionsBtn.addEventListener("click", function () {
        instructionsPopup.style.display = "block";
        menu.style.display = "none"; // Hide main menu
    });

    // Get the close button inside the popup
    var closeBtn = instructionsPopup.querySelector(".close");

    // When the user clicks on the close button, hide the popup and display main menu
    closeBtn.addEventListener("click", function () {
        instructionsPopup.style.display = "none";
        menu.style.display = "flex"; // Display main menu
    });

    // When the user clicks on the start button, navigate to index.html
    var startBtn = document.getElementById("start_button");
    startBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    // When the user clicks on the leave button, close the tab
    var leaveBtn = document.getElementById("leave_button");
    leaveBtn.addEventListener("click", function () {
        window.close();
    });

    // When the user clicks anywhere outside of the popup, close it
    window.addEventListener("click", function (event) {
        if (event.target == instructionsPopup) {
            instructionsPopup.style.display = "none";
            menu.style.display = "flex"; // Display main menu
        }
    });
});
