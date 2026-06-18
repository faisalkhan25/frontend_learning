const btn = document.querySelector("#btn");

const bulb = document.querySelector(".bulb");

btn.addEventListener('click', e => {
    if(bulb.classList.toggle("lightBulb")) {
        btn.textContent = "OFF";
    }
    else {
        btn.textContent = "ON";
    }
});

