async function github() {

    try {

        console.log("Fetching data from GitHub...");

        const headers = await fetch("https://api.github.com/users");
        
        if(!headers.ok) {
            throw new Error("Failed to fetch GitHub data");
        }

        const data = await headers.json();

        return data;
    }

    catch (error) {
        console.error(error);
    }
}


github()
    .then( (data) => {
        
        const parent = document.getElementById("first");

        data.forEach((user) => {

            const element = document.createElement("div");
            element.classList.add("user");

            const image = document.createElement("img");
            image.src = user.avatar_url;

            const username = document.createElement("h2");
            username.textContent = user.login;

            const anchor = document.createElement("a");
            anchor.href = user.html_url;
            anchor.textContent = "View Profile";
            anchor.target = "_blank";

            element.append(image, username, anchor);
            parent.append(element);
        });
    });