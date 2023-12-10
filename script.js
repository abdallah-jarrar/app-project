document.getElementById("upload-form").addEventListener("submit", function(e) {
    e.preventDefault();
    let formData = new FormData(this);

    fetch("/predict", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result-container").innerHTML = 'result: ' + data.result;
    })

    .catch(error => {
        console.error(error);

    });

});
