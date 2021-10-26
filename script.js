const Reyn = document.getElementById("Reyn");
const button = document.getElementById("button");

button.onclick = function() {
    Reyn.style.display = "block";
    button.innerHTML = "IT'S REYN TIME!"
}

function reynTime() {
    Reyn.style.display = "block";
    button.innerHTML = "IT'S REYN TIME!"
    button.style.fontWeight = "bold";
}

button.addEventListener("click", reynTime)