//----------------------//
// CUSTOM ALERT BOX //
const alertBox = document.getElementById("customAlertBox");
const alertMessageContainer = document.getElementById("alertMessage");
const closeImg = document.querySelector(".close");

//----------------------//
// Send E-mail via EmailJS //
window.onload = function() {
    document.getElementById("contact-form").addEventListener('submit', function(event) {
        event.preventDefault();

        // these IDs from the previous steps
        emailjs.sendForm("default_service", "contact_form", this).then((response) => {
                console.log("Message was sent successfully!");
                alertMessageContainer.innerHTML ="Seu formulário foi enviado. Obrigado por escolher a J2K Imóveis";
                alertBox.style.display = "block";

            }, (error) => {
                console.log("Falha ao enviar mensagem. Tente novamente.", error);
                alertMessageContainer.innerHTML ="Erro. Tente novamente";
                alertBox.style.display = "block";
            });
    });

    closeImg.addEventListener('click', function () {
        alertBox.style.display = "none";
    });
}