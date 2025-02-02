const knight = document.getElementById('knight');

const squares = document.querySelectorAll('.square');

const info = document.getElementById('info');

knight.addEventListener("drag", dragging);
knight.addEventListener("dragstart", dragStart);

squares.forEach((square)=>{
    square.addEventListener('dragover', dragOver);
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragend', dragEnd)
})


let isDragged;

function dragStart (e) {
    isDragged = e.target;
    console.log(e.target + " il trascinamento è iniziato id: ",isDragged.id)
}

function dragOver(e){
    e.preventDefault();
    console.log(isDragged.id + " è entrato in " + e.target.classList.value)
}

function dragEnter(e){
    e.target.classList.add('highlight')
    console.log("hai finito di trascinare", isDragged.id + " in " + e.target.classList.value)
}


function dragLeave(e){
    e.target.classList.remove('highlight')
    console.log(isDragged.id + " sta lasciando lo spazio di " + e.target.classList.value)
}

function dragDrop(e){
    e.target.classList.remove('highlight')
    e.target.append(isDragged);
}

function dragEnd(e){
    e.target.classList.add('target');
    setTimeout(()=> e.target.classList.remove('target'), 300);
    console.log(isDragged.id + " ha finito il trascinamento");
    info.textContent = ''
}


function dragging () {
    console.log(isDragged.id + " è stato trascinato");
    info.textContent = "Stai trascinando " + isDragged.id;
}
