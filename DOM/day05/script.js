const main = document.querySelector("main");

const btn = document.querySelector("button");

const box = document.createElement("div");
box.classList.add("box");

const timer = document.querySelector("#timer");
const score = document.querySelector("#score");

const gameOver = document.querySelector("#over-game")


const createBox = () => {
    
    box.style.backgroundColor = randomColors();
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

const randomColors = () => {
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;
    return `rgb(${r},${g},${b})`;
}

let interval;
let currentScore = 0;

btn.addEventListener('click', e => {
    
    let time = 0;
    
    if(currentScore != 0) {
        currentScore = 0;
        score.textContent = 0;
    }

    if(interval) {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        createBox();
        time += 1;

        timer.textContent = time;


    }, 1000);


    setTimeout(() => {
        gameOver.style.display = "flex";
        restart();
        clearInterval(interval);
    }, 20000);
});


box.addEventListener('click', () => {
    currentScore += 1;
    score.textContent = currentScore;
    box.remove();
});

const restart = () => {

    setTimeout(() => {

        score.textContent = 0;
        timer.textContent = 0;

        createBox();
        box.remove();

        gameOver.style.display = "none";
        
    }, 3000);
};