const main = document.querySelector("main");

const btn = document.querySelector("button");

const box = document.createElement("div");
box.classList.add("box");


const createBox = () => {
    
    main.append(box);

    let mainWidth = main.getBoundingClientRect().width;
    let mainHeight = main.getBoundingClientRect().height;

    let boxWidth = box.getBoundingClientRect().width;
    let boxHeight = box.getBoundingClientRect().height;

    let allowedWidth = Math.random() * (mainWidth - boxWidth);
    let allowedHeight = Math.random() * (mainHeight - boxHeight);

    box.style.top = allowedHeight + "px";
    box.style.left = allowedWidth + "px";
}

let interval;

btn.addEventListener('click', e => {
    

    clearInterval(interval);

    interval = setInterval(() => {
        createBox();
    }, 1000);


    setTimeout(() => {
        clearInterval(interval);
    }, 20000);
});
