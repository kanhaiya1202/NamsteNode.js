let todos = [];

function addtodo(){
    todos.push({
        title:document.querySelector("input").value
    })
    render()
}

function deletLastTodo(){
    todos.splice(todos.length -1, 1)
    render()
}

function deletFirstTodo(){
    todos.splice(0,1)
    render()
}

function detelToDo(){
    const element  = document.querySelector("#todod")
    document.querySelector("#Todos").removeChild(element)
}
function render(){
    document.querySelector("#Todos").innerHTML = ""
    for(let i = 0; i<todos.length; i++){
        const todo = todos[i]
        const div = document.createElement("div");
        div.setAttribute("id", "todod")
        const button = document.createElement("button");
        button.setAttribute("onclick","detelToDo()")
        const h2 = document.createElement("h2");
        h2.innerHTML = todo.title
        button.innerHTML = "Delete"
        div.appendChild(h2)
        div.appendChild(button)

        document.querySelector("#Todos").appendChild(div)

    }
}