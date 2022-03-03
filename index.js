let count = 0
let countEl = document.getElementById("count")

const increment = () => {
    count += 1;
    countEl.textContent = count;
}

const decrement = () => {
    count -= 1;
    countEl.textContent = count;
}

 const save = () => {
    let individualCount = document.getElementById("individual_count")
    let individualStr = count + " ===> ";
    individualCount.textContent += individualStr
    count = 0;
    countEl.textContent = 0;
}