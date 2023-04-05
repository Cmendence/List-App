let id = 1;


document.getElementById('btn').addEventListener('click', () => {
    console.log('button working')
    let date = new Date();
    let time = date.toLocaleString();
    let table = document.getElementById('list');
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = time;
    row.insertCell(2).innerHTML = document.getElementById('task').value;
    row.insertCell(3).innerHTML = document.getElementById('setter').value;
    let deleteBtn = row.insertCell(4);
    deleteBtn.appendChild(createDeleteButton(id++));
    document.getElementById('task').value = '';
    document.getElementById('setter').value = '';
    // id++;
});

document.getElementById('rick').addEventListener('mouseover', () => {
    document.getElementById('rick').innerHTML = `I SAID DON'T`;
})
document.getElementById('rick').addEventListener('mouseout', () => {
    document.getElementById('rick').innerHTML = `Don't click this`;
})
document.getElementById('rick').addEventListener('click', () => {
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
})

function createDeleteButton(id) {
    let btn = document.createElement('button')
    btn.id = id;
    btn.innerHTML = 'Done!';
    btn.className = 'btn  btn-success';
    btn.onclick = () => {
        console.log(`Deleting element with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }

    return btn;
}

// Execute a function when the user presses a key on the keyboard
document.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Trigger the button element with a click
      document.getElementById("btn").click();
    }
  });