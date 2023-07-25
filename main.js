let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

        function addToDo() {
            if(inputBox.value === '') {
                alert("You must add ToDo!");
            } else {
                let li = document.createElement("li");
                li.innerText = inputBox.value;
                listContainer.appendChild(li);
        let span = document.createElement("span");
                span.innerText = "\u2421";
                li.appendChild(span);
            }
            inputBox.value = "";
        }

listContainer.addEventListener("click", function(e) {
       if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
       } 
       else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
       }
}, false);


