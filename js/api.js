fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        displayUsers(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));


function displayUsers(data) {
    let tab =
        `<h1></h1>
       <h1></h1>
       `;


    for (let r of data.data) {
        tab += `
        <img src="${r.avatar}" />
        <h1>${r.first_name}&nbsp;${r.last_name}</h1>
        <p>${r.email}</p>   
        `;
    }

    document.getElementById("users").innerHTML = tab;
}
