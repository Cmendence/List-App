let id = 1;

//set cursor to first input field on load
thisId('task').focus();

thisId('btn').addEventListener('click', () => {

    let isTaskValid = isFieldValid('task', 'task-error');
    let isSetterValid = isFieldValid('setter', 'setter-error');
// validate the fields
    if (isTaskValid && isSetterValid) {
    let date = new Date();
    let time = date.toLocaleString();
    let tableBody = document.getElementById('tableBody');
    let row = tableBody.insertRow(0);
    row.setAttribute('id', `item-${id}`);
    cellHTML(row, 0, id);
    cellHTML(row, 1, time);
    cellHTML(row, 2, thisId('task').value)
    cellHTML(row, 3, thisId('setter').value)
    let deleteBtn = row.insertCell(4);
    deleteBtn.appendChild(createDeleteButton(id++));
    thisId('task').value = '';
    thisId('setter').value = '';
    clearValid('task');
    clearValid('setter');
    thisId('task').focus();

    // id++;
    }
});

thisId('rick').addEventListener('mouseover', () => {
    thisId('rick').innerHTML = `I SAID DON'T`;
})

thisId('rick').addEventListener('mouseout', () => {
    thisId('rick').innerHTML = `Don't click this`;
})

thisId('rick').addEventListener('click', () => {
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
        let elementToDelete = thisId(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }

    return btn;
}

// Execute a function when the user presses a key on the keyboard
document.addEventListener('keypress', function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === 'Enter') {
      // Trigger the button element with a click
      thisId('btn').click();
    }
  });


  //checks if input field is empty. takes the input html id and the empty small text tag id below the field. if false, it changes 
  //the textContent to 'field is empty' and adds the class 'is-valid', otherwise it leaves the content empty and adds the class 'is-valid'.

 function isFieldValid(inputId, inputErrorId) {
   let input = thisId(inputId).value;
   let inputError = thisId(inputErrorId);
  
   if (input === '') {
    thisId(inputId).classList.add('is-invalid');
       inputError.textContent = 'Field is Empty';
       console.log(`added class 'is-invalid to input id:${inputId}`)
      return false;
    } else {
        thisId(inputId).classList.remove('is-invalid');
        thisId(inputId).classList.add('is-valid');
      inputError.textContent = '';
      console.log(`added class 'is-valid to input id:${inputId}`)
    return true
    }
}
 
//shorthand for document.getElementById(id)
 function thisId(id) {
     console.log(`thisId function is tied to id:${id}`);
    return document.getElementById(id);
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
    thisId(id).className = 'form-control';
    
}

document.getElementById('clear-history').addEventListener('click', () => {
    let tableBody = document.getElementById('tableBody');
    clearHistory(tableBody)
    
})

function clearHistory(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
