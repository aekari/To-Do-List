var userSubmit = document.querySelector('#user-submit');	// global variable userSubmit is assigned to the html id #user-submit (button element)
var toDoList = document.querySelector('#to-do-list');		// global variable toDoList is assigned to the html id #to-do-list (empty unordered list)

function addToDo(event){									// this function will add a toDo and has a single event parameter
	event.preventDefault();
	var userInput = document.querySelector('#user-input');	// var userInput is assigned to the html id #user-input
	if (userInput.value ==='') {							// if userInput's value is exactly equal to an empty string, 
		return false;									    // return false
	}

	toDoList.innerHTML = '<li><i class="fa fa-close-to-do fa-times-circle-o" aria-hidden="true"></i>'+ userInput.value + '</li>' + toDoList.innerHTML;
	// the above line inserts an li item along with a few chosen bootstrap classes to have them display properly. it then adds whatever the previous 'version' of the toDoList.
	userInput.value = ''; // resets the user input value back to an empty string
}

function removeToDo(event){		// this function will remove a to do item and has a single event parameter
	// console.log(event.target.classList.contains('fa-close-to-do'));
	if (event.target.classList.contains('fa-close-to-do')){		// if the variable event target contains the class "fa-close-to-do" (which is only to do list items (li)), do the following:
		var li = event.target.parentElement;					// li is assigned a value of the parent element of the event target (which is ul)
		toDoList.removeChild(li);								// and remove the li from the task area
	}
}

toDoList.addEventListener('click', removeToDo, false);
userSubmit.addEventListener('click', addToDo, false)