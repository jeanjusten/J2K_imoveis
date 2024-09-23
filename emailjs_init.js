const email_js_client_key = process.env.API_KEY;

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: email_js_client_key, 
    });
})();
