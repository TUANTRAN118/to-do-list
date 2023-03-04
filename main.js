// bat 2 su kien button va content
let btnAddEl = document.querySelector('button');
let taskEl = document.querySelector('#content');


let tasks = getTask();
renderTasks(tasks)

// su kien
btnAddEl.addEventListener('click', function () {

    if (!taskEl.value) {
        alert('CHUA NHAP TEN CONG VIEC !');
        return false;
    }

    //
    let taskId = this.getAttribute('id');
    //
    let tasks = getTask();
    let task = {name: taskEl.value};

    if(taskId ==0 || taskId){
        tasks[taskId] = task;
        this.removeAttribute('id');
    }   
    else{
        tasks.push(task);
    }


    //tasks.push({ name: taskEl.value });
    taskEl.value = '';

    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks(tasks);

})

// edit task
function editTask(id) {
    let tasks = getTask();
    if(tasks.length > 0){
        // 
        taskEl.value = tasks[id].name;
        btnAddEl.setAttribute('id', id);
       
    }
 console.log(tasks);

}

// xoa task
function deleteTask(id) {
    let tasks = getTask();
    tasks.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks(tasks);
}

// xuat danh sach task
function renderTasks(tasks = []) {

    let content = '<ul>';
    tasks.forEach((value, index) => {
        content += `<li> 
                    <div class="list-name"> ${value.name} </div>
                    <a href="#" onclick="editTask(${index})"> Edit </a>
                    <a href="#" onclick="deleteTask(${index})"> Delete </a>
                    </li>`
    })
    content += '</ul>';
    document.querySelector('#resulf').innerHTML = content;
}


// lay task
function getTask(){
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

}
