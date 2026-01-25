let currentIndex = 2;

function addTodo(){
    const inputElement = document.querySelector("input")
    const inpvalue = inputElement.value.trim()

    if(inpvalue ===''){
        alert("input text is empty")
        return
    }

    const createDiv = document.createElement("div")
    createDiv.setAttribute("id", 'todo-' + currentIndex)

    const headerElement = document.createElement("h4")
    headerElement.textContent = currentIndex + "." + inpvalue

    const createButton = document.createElement("button")
    createButton.textContent = 'delete'
    createButton.setAttribute("onclick","deletTodo("+currentIndex+")");

    createDiv.appendChild(headerElement)
    createDiv.appendChild(createButton)
    

    currentIndex++;
    inputElement.value  = ''
    document.querySelector("#parentTodo").appendChild(createDiv)
}

function deletTodo(index){
    const element = document.querySelector("#todo-"+ index)
    if(element){
        element.parentNode.removeChild(element)
    }
}