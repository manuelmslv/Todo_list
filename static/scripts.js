document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', function() {
        const taskText = newTaskInput.value;
        if (taskText) {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(taskItem);
            newTaskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            event.target.parentElement.remove();
        } else if (event.target.classList.contains('edit-button')) {
            const taskTextElement = event.target.parentElement.querySelector('.task-text');
            const newTaskText = prompt('Edit task:', taskTextElement.textContent);
            if (newTaskText) {
                taskTextElement.textContent = newTaskText;
            }
        }
    });
});
