var counter = 0;

let counter_id = document.getElementById("counter")

document.getElementById("clicker").addEventListener("click",() =>{
    counter_id.innerHTML = counter++;
})