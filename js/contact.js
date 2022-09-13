const { format } = require("express/lib/response");

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});



const notify = document.getElementById('sentNot');
const btn = document.getElementById('sumbit');

btn.addEventListener('click', function handleClick() {
    if (notify.style.display === 'none') {
        notify.style.display = 'block';
    
    }
    else {
        notify.style.display = 'none';
    }
  });
