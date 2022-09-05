window.addEventListener('load', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const listElements = document.getElementById('tasks');

    // FORM  EVENT LISTENER SUBMIT
    form.addEventListener('submit', e => {
        e.preventDefault();

        const task = input.value;
        if (!task) {      // IF INPUT FIELD IS EMPTY
            alert('Enter the Task');
            return;
        }

        // CREATING A INDIVDUAL TASK
        const taskElements = document.createElement('div');
        taskElements.className = 'flex flex-wrap justify-center my-4'

        // CREATING TEXT PART OF TASK
        const taskInputElement = document.createElement('input');
        taskInputElement.className = 'basis-3/5 w-full sm:basis-2/5 xl:basis-1/3 px-4 rounded-md ' + 
            ' outline-0 bg-slate-700 text-slate-300 focus:text-slate-50';
        taskInputElement.type = 'text';
        taskInputElement.value = task;
        taskInputElement.setAttribute('readonly', 'readonly');

        taskElements.appendChild(taskInputElement);

        // CREATING DELETE AND EDIT BUTTONS
        const taskEditElement = document.createElement('button');
        taskEditElement.className = 'text-blue-400 mx-2';
        taskEditElement.innerText = 'Edit';

        const taskDeleteElement = document.createElement('button');
        taskDeleteElement.className = 'text-red-400';
        taskDeleteElement.innerHTML = 'Delete';

        taskElements.appendChild(taskEditElement);
        taskElements.appendChild(taskDeleteElement);


        // PUTTING INDIVIDUAL TASK IN TASK LIST
        listElements.appendChild(taskElements);

        input.value = '';       // EMPTYING VALUE OF TASK

        // EDIT BUTTON EVENT LISTENER CLICK
        taskEditElement.addEventListener('click', e => {
            if (e.target.innerText === 'Edit') {
                taskInputElement.removeAttribute('readonly');
                taskInputElement.focus();
                e.target.innerText = 'Save';
                e.target.className = 'text-purple-400 mx-2';
            }
            else {
                taskInputElement.setAttribute('readonly', 'readonly');
                e.target.innerText = 'Edit';
                e.target.className = 'text-blue-400 mx-2';
            }
        });

        // DELETE BUTTON EVENT LISTENER CLICK
        taskDeleteElement.addEventListener('click', () => {
            listElements.removeChild(taskElements);
        } );

    })
})
