document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});



function onLoad(params) {

    var tempParams = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value
    };



    emailjs.send("service_5rg4jzd", "template_d3n7vmw", tempParams)
        .then(function sendSuccess() {
            alert("Sent successfully!");
        })
}


