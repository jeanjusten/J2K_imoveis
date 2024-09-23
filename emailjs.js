//----------------------//
// Send E-mail via EmailJS //
window.onload = function() {
    document.getElementById("contact-form").addEventListener('submit', function(event) {
        event.preventDefault();

        // these IDs from the previous steps
        emailjs.sendForm("default_service", "contact_form", this).then((response) => {
                console.log("Message was sent successfully!");
                alertMessageContainer.innerHTML ="Message was sent successfully!";
                alertBox.style.display = "block";

            }, (error) => {
                console.log("Message failed. Please try again.", error);
                alertMessageContainer.innerHTML ="Error. Please try again";
                alertBox.style.display = "block";
            });
    });

    closeImg.addEventListener('click', function () {
        alertBox.style.display = "none";
    });
}