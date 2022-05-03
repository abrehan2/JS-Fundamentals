const add_btn = document.getElementById('add');


const notes = JSON.parse(localStorage.getItem('notes'));

if(notes)
{
    notes.forEach(note => addnewNote(note));
}

add_btn.addEventListener('click', () => addnewNote());

function addnewNote(text = '')
{
    const note = document.createElement('div'); // creating div dynamically
    note.classList.add('note');

    note.innerHTML = `<div class="tools">
    <button class="edit">
        <i class="fas fa-edit"></i>
    </button>
    <button class="delete">
<i class="fas fa-trash-alt"></i>
    </button>
</div>

<div class="main ${text ? "" : "hidden"}"></div>

<textarea class = "${text ? "hidden" : ""}"></textarea>`

const edit_btn  = note.querySelector('.edit');
const delete_btn = note.querySelector('.delete');
const main = note.querySelector('.main');
const textArea = note.querySelector('textarea');

textArea.value = text
main.innerHTML = text



delete_btn.addEventListener("click", () => {
    note.remove();

    updateLS();
})

edit_btn.addEventListener("click", () => {
   main.classList.toggle('hidden');
   textArea.classList.toggle('hidden');
})

textArea.addEventListener('input', (e) => {
    const {value} = e.target;
    main.innerHTML = value

    updateLS();
})

document.body.appendChild(note); // appending the div

}


function updateLS()
{
const notesText = document.querySelectorAll('textarea');

const notes = []

notesText.forEach(note => notes.push(note.value))

localStorage.setItem('notes', JSON.stringify(notes));
}