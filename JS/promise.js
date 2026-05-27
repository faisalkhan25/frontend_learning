// console.log("hello world");

// const p1 = fetch("https://api.github.com/users");

// const p2 = p1.then((response) => {
//     return response.json();
// });

// p2.then((data) => {
//     console.log(data);
// })

fetch("https://api.github.com/users")
    .then((response) => {

        console.log(response);

        if(!response.ok) {
            throw new Error("Network response was not ok");
        }

        return response.json();

    })
    .then((data) => {
        const parent = document.getElementById("first");

        for(let i = 0; i < data.length; i++) {
            const image = document.createElement("img");
            image.src = data[i].avatar_url;
            image.alt = data[i].id;
            image.style.width = "100px";
            image.style.height = "100px";
            parent.append(image);
        }

    })
    .catch((error) => {
        const parent = document.getElementById("first");

        parent.textContent = error.message;
    });


// Javascript object
// const j1 = {
//     name: "hello", 
//     age: 20,
//     address: "Srinagar",
//     c: undefined,
//     d: function() {
//         console.log("this is the function inside the js Object");
//     }
// };

// j1.d();

// // convert to JSON

// const jsonFormat = JSON.stringify(j1);

// console.log(jsonFormat);

// const jsObjectFormat = JSON.parse(jsonFormat);

// console.log(jsObjectFormat);