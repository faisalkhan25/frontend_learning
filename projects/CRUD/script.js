const createButton = document.querySelector("#create");

const formDiv = document.querySelector(".form");

const closeBtn = document.querySelector("#close");

const form = document.querySelector("form");

const dataArr = [];


createButton.addEventListener('click', e => {
    formDiv.style.display = "flex";
});

closeBtn.addEventListener('click', () => {
    formDiv.style.display="none";
});

form.addEventListener("submit", event => {

    event.preventDefault();

    let productName = event.target[0].value;
    let description = event.target[1].value;
    let price = event.target[2].value;
    let imageUrl = event.target[3].value;


    if(productName.trim() === "" || description.trim() ==="" || price.trim() ==="" || imageUrl.trim() ===""){
        alert("Fill All The Fields");
        return;
    }



    dataArr.push({
        productName,
        description,
        price,
        imageUrl
    });


    console.log(dataArr);
    form.reset();


});