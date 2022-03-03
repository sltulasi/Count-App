let count = 0
let countEl = document.getElementById("count")

function increment(){
    count += 1;
    countEl.textContent = count;
}

function decrement(){
    count -= 1;
    countEl.textContent = count;
}

function save(){
    let individualCount = document.getElementById("individual_count")
    let individualStr = count + " ===> ";
    individualCount.textContent += individualStr
    count = 0;
    countEl.textContent = 0;
}