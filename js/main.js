const todoForm = document.querySelector(`#todo`);
const cards = document.querySelector(`#cards`);
const todoTogglers = document.querySelectorAll(`#todoRadio`);
const editBtns = document.querySelectorAll(`#edit-btn`);
const loginOut = document.querySelector('.loginOut');

let todosArr = [
    {
        id:3,
        task:`blabla`,
        isCompleted:false,
        isEditing:true,
    },
    
]

render()
// ! form sambit bulganda todo objectni arrayga push qilish functioni
todoForm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const todoCaption = e.target[0].value;
    const todo = {
        id:todosArr.length +1,
        task:todoCaption,
        isCompleted:false,
        isEditing:false,
    }

    todosArr.push(todo);
    render()
})



// !  inputda malumot kiritilganda inneHtml qilib arrayni qushish
function render(){
    cards.innerHTML= ""; 
    for(let i= 0 ; i<todosArr.length ; i++){
        const todo = todosArr[i]
        const template = todo.isEditing ? `
        <div class="col-md-3 p-3 bg-light rounded ">
        <input type="text" placeholder="${todo.task}" class="w-100">
        <div class="d-flex justify-content-end pt-2">
        <button class="btn btn-info"
                    type="button"
                    id="edit-btn"
                    >
                    <i class="fas fa-floppy-disk"></i>
                    </button>
        </div>
        </div>` 
        :
        `
        <div class="col-md-3 p-3 ${todo.isCompleted ? "bg-success text-light" : "bg-light"} rounded">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="todoRadio"
                onchange="toggleComplete(${todo.id})" ${todo.isCompleted ? "checked" : ""}>
                <label class="form-check-label" for="todoRadio">${todosArr[i].task}</label>
                           
                <div class="d-flex justify-content-center gap-5 mt-3">
                    <button class="btn btn-warning "
                    type="button"
                    id="edit-btn"
                    data-id="${todo.id}">
                    <i class="fas fa-pen"></i>
                    </button>
        
                    <button class="btn btn-danger"
                    type="button"
                    id="delete-btn"
                    onclick="deleteTodo(${todo.id})">
                    <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>                      
        </div>
        `
        cards.innerHTML = cards.innerHTML + template;
    }
   
}

// ! qushilgan arraylarni beagraundlarini rangini uzgartirsh
function toggleComplete(id){
    for(let i=0; i<todosArr.length; i++){
        const todo = todosArr[i];
        if(todo.id == id){
            todo.isCompleted = !todo.isCompleted;
        }
    }
    render();
}

// ! qushilgan arraylarni delet qilish


function deleteTodo(id){
    const isAccepted = confirm(`Do you really delete this todo`)
    if(isAccepted){
        const newArr =[]
        for(let i = 0; i <todosArr.length;i++){
            const todo = todosArr[i];
            if(todo.id !== id){
                newArr.push(todo);
            }
        }
        todosArr = newArr;
        render()
    }
}

// ! edit function

for(let i = 0 ; i<editBtns.length ; i++){
    editBtns[i].addEventListener(`click`,)
}


// log out function

loginOut.addEventListener(`click`,  (e) => {
    e.preventDefault()

    window.location.replace('./login.html')
} )






