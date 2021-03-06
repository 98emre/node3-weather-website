console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector("#message-3");
const messageFoure= document.querySelector("#message-4");
const messageFive = document.querySelector("#message-5");
const messageSix = document.querySelector("#message-6");

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    messageThree.textContent = "";
    messageFoure.textContent = "";
    messageFive.textContent = "";

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = "Location: " + data.location;
                messageTwo.textContent = "Temperature: " + data.temperature;
                messageThree.textContent = "LocalTime: " + data.localtime;
                messageFoure.textContent = "Longitude: " + data.longitude;
                messageFive.textContent = "Latitude: " + data.latitude;
            }
        })
    })
})