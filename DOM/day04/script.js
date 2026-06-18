const form = document.querySelector("form");

const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const url = document.querySelector("#url");


const users = document.querySelector(".users");


let userData = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    imageUrl: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Marcus Lee",
    email: "marcus.lee@example.com",
    imageUrl: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    imageUrl: "https://i.pravatar.cc/150?img=5"
  }
];

const ui = () => {
    users.innerHTML = "";
    userData.forEach((element, index) => {
        users.innerHTML += `<div class="user_card">

            <div class="img_box">
                <img src="${element.imageUrl}" alt="image">
            </div>

            <div class="text">
                <h3>Name- ${element.name}</h3>
                <p>Email- ${element.email}</p>
            </div>
            <div class="actions">
                <button id="edit">Edit</button>
                <button id="delete" onClick=deleteCard(${index})>Delete</button>
            </div>
        </div>`
    });
};

ui();

form.addEventListener('submit', (events) => {

    events.preventDefault();

    let name = inp1.value;
    let email = inp2.value;
    let imageUrl = url.value;

    if(name.trim() === "" || email.trim() === "" || imageUrl.trim() === "") return;

    userData.push({
        name,
        email,
        imageUrl
    });

    ui();

    form.reset();

});


const deleteCard = (index) => {
    userData.splice(index, 1);
    ui();
}
