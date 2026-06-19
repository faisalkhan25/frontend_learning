const inp = document.querySelector("input");
const btn = document.querySelector("#add-btn");
const todoBox = document.querySelector(".todo-list");

const buttonCount = 0;

btn.addEventListener('click', () => {
    let value = inp.value;

    if(value.trim() === "") return;

    const div = document.createElement('div');
    div.classList.add('li');

    const heading = document.createElement('h3');
    heading.textContent = value;

    const childDiv = document.createElement('div');
    childDiv.setAttribute('id', 'btns');


    const childButtonEdit = document.createElement('button');
    childButtonEdit.classList.add('btn');
    childButtonEdit.setAttribute('id', 'edit');
    childButtonEdit.textContent = 'Edit';

    const childButtonDelete = document.createElement('button');
    childButtonDelete.classList.add('btn');
    childButtonDelete.setAttribute('id', 'delete');
    childButtonDelete.textContent = 'Delete';

    div.append(heading, childDiv);
    childDiv.append(childButtonEdit, childButtonDelete);


    // todoBox.innerHTML += `<div class="li">
    //             <h3>${value}</h3>
    //             <div id="btns">
    //                 <button id="edit" class="btn">Edit</button>
    //                 <button id="delete" class="btn">Delete</button>
    //             </div>
    //         </div>`;

    todoBox.append(div);

    inp.value = "";
});