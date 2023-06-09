let id = 1;

//set cursor to first input field on load
document.getElementById('task').focus();

document.getElementById('btn').addEventListener('click', () => {

    let isTaskValid = isFieldValid('task', 'task-error');
    let isSetterValid = isFieldValid('setter', 'setter-error');
// validate the fields
    if (isTaskValid && isSetterValid) {
    let date = new Date();
    let time = date.toLocaleString();
    let tableBody = document.getElementById('tableBody');
    let row = tableBody.insertRow(0);
    row.setAttribute('id', `item-${id}`);

    row.insertCell(0).innerHTML= id;
    row.insertCell(1).innerHTML= time;
    row.insertCell(2).innerHTML= document.getElementById('task').value
    row.insertCell(3).innerHTML= document.getElementById('setter').value

    let deleteBtn = row.insertCell(4);
    deleteBtn.appendChild(createDeleteButton(id++));
    document.getElementById('task').value = '';
    document.getElementById('setter').value = '';
    clearValid('task');
    clearValid('setter');
    document.getElementById('task').focus();

    // id++;
    }
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


//creates delete button to be added in cell 4 of the row. function creates the button, sets the id, innerHTML, 
//and class name. Adds the onclick method and removes the element with its own id

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
document.addEventListener('keypress', (event) => {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === 'Enter') {
      // Trigger the button element with a click
      document.getElementById('btn').click();
    }
  });


  //checks if input field is empty. takes the input html id and the empty small text tag id below the field. if false, it changes 
  //the textContent to 'field is empty' and adds the class 'is-valid', otherwise it leaves the content empty and adds the class 'is-valid'.

 function isFieldValid(inputId, inputErrorId) {
   let input = document.getElementById(inputId).value;
   let inputError = document.getElementById(inputErrorId);
  
   if (input === '') {
    document.getElementById(inputId).classList.add('is-invalid');
       inputError.textContent = 'Field is Empty';
       console.log(`added class 'is-invalid to input id:${inputId}`)
      return false;
    } else {
        document.getElementById(inputId).classList.remove('is-invalid');
        document.getElementById(inputId).classList.add('is-valid');
      inputError.textContent = '';
      console.log(`added class 'is-valid to input id:${inputId}`)
    return true
    }
}
 


// adds a cell to an element(for this use it's a table). function takes the element, 
//the index of the row you want to occupy, and the the innterHTML content.

function cellHTML(element, index, content) {
    console.log(`cellHTML added ${content} to cell ${index}`);
   return element.insertCell(index).innerHTML = content;
}
// after a successful row addition, it resets the class of the input to "form-control"(don't know how to restore original class)
// I guess I could check if it's there already?

function clearValid(id){
    document.getElementById(id).className = 'form-control';
    
}

//clear all button

// document.getElementById('clear-history').addEventListener('click', () => {
//     let tableBody = document.getElementById('tableBody');
//     clearHistory(tableBody);
    
// })

// function clearHistory(element) {
//     while(element.firstChild) {
//         element.removeChild(element.firstChild);
//     }
// }
