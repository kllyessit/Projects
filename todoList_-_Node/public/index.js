const createdTab = document.getElementById('unfinished-tasks');
const finishedTab = document.getElementById('finished-tasks');
const input = document.getElementById('userInput');
const STATUS = {
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
};


// Post request to update server json file
function postRequest(id, obj) {
    fetch('http://localhost:8000/task/' + id , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    })
        .then(res => {
            console.log(res);
        })
        .catch(function (err) {
            console.error({"Error Message": [err]})
        });
}
// Function that handles tasks that user says is "unfinished"
function createTask() {
    try {
        const inputValue = input.value.length;
        const task = input.value;

        if (inputValue > 0) {
            const div = document.createElement('div');

            //Appending into list and returning value to empty
            div.appendChild(document.createTextNode(input.value));
            createdTab.appendChild(div);

            // Setting attributes
            div.setAttribute('class', STATUS.PENDING);
            const length = document.getElementsByClassName(STATUS.PENDING).length;
            let id = "task-" + length;
            div.setAttribute('id', id);

            const obj = {
                task: task,
                status: STATUS.PENDING
            };

            postRequest(id, obj);

            input.value = '';

            // Adding button for user to remove task
            const dBtn = document.createElement("button");
            dBtn.appendChild(document.createTextNode("X"));

            // Adding id to button
            dBtn.setAttribute('id', 'remove');
            div.appendChild(dBtn);
            dBtn.addEventListener('click', deleteListItem);
        }
    } catch (e) {
        console.log(e);
    }
}
// Get request to retrieve data from server and not make a change to browser if user decides to refresh page
fetch('http://localhost:8000/task')
    .then(res => res.json())
    .then(function(data) {
        Object.keys(data).forEach(function(key) {
            for(var id in data[key]){
            handleTask(id, data[key])
            }
        });
    })
    .catch(function(err) {
        console.error({"Error Message" :[err]})
    });
// Function to handle the task being passed through from get request
// Adding needed id, value, dBtn, and appending to proper div
function handleTask(id, obj) {
    try {
        const div = document.createElement('div');

        // Setting parameters needed for html
        Object.keys(obj).forEach(function(key){
            div.id = id;
            div.innerText = obj[key].task;
            div.className = obj[key].status;

            if (obj[key].status === STATUS.COMPLETED) {
                finishedTab.appendChild(div);
            } else {
                createdTab.appendChild(div);
            }
        });

        // Setting attribute to draggable
        div.setAttribute('draggable', 'true');

        // Adding button for user to remove task
        const dBtn = document.createElement("button");
        dBtn.appendChild(document.createTextNode("X"));

        // Adding id to button
        dBtn.setAttribute('id', 'remove');
        div.appendChild(dBtn);
        dBtn.addEventListener('click', deleteListItem);
        // Calling function to listen to drag event
        // addDragEventListeners(task, div);
    } catch (e) {
        console.error(e)
    }
}
// Function that deletes the task
function deleteListItem(event) {
    const div = event.path[1];
    const id = event.path[1].id;
    deleteData(id);
    div.remove()
}
// Sending a DELETE request to server to delete task from json file
function deleteData(id) {
    return fetch('http://localhost:8000/task/' + id +'/remove', {
        method: 'POST'
    }).then(response => response.json())
        .then(function(res) {
                alert(res)
            })
                .catch(function(err) {
                    console.error({"Error Message" :[err]})
                });
}
