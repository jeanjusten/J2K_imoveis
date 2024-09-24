const email_js_client_key = process.env.API_KEY;

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "kGPFPWjqp-T9f7Dml", 
        privateKey: email_js_client_key,
    });
})();
