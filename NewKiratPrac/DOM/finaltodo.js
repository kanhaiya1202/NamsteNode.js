let crt = 1;
        function addTodo(){
            const inputElement = document.querySelector("input")
            const createDivElement = document.createElement("div")
            createDivElement.setAttribute("id", "todo-"+crt)
            crt = crt+1;
            const parentNodeElement = document.querySelector("#parentNode").appendChild(createDivElement)
            createDivElement.innerHTML = "<h2>"+inputElement.value+"</h2><button onclick='removeElement("+crt+")'>delet</button>"
            
        }
        function removeElement(index){
            const divElement = document.querySelector("#todo-"+index)
            const parentNodeE = document.querySelector("#parentNode").removeChild(divElement)
        }