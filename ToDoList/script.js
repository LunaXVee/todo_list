const taskForm = document.getElementById("task-form");
const food = document.getElementById("food");
const book = document.getElementById("book");
const love = document.getElementById("love");
const thoughts = document.getElementById("thoughts");
const other = document.getElementById("other");

const closeTaskFormBtn = document.getElementById("close-task-form-btn");

// Show the task form when the elements are clicked
[food, book, love, thoughts, other ].forEach(function(element){
    element.addEventListener("click", () => {
        taskForm.classList.toggle("hidden");
    });
});


// Hide the task form when the close button is clicked
closeTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.add("hidden"); // Use 'add' instead of 'toggle' to ensure it closes
});

