const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("input field cannot be blank");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    saveData();
    inputBox.value = '';

}

listContainer.addEventListener('click', (a)=>{
    if(a.target.tagName === "LI"){
        a.target.classList.toggle("checked");
        saveData();
        
    }

    else if (a.target.tagName === "SPAN"){
        a.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function saveTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

saveTask();