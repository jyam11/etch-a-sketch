const grid = document.querySelector(".grid-container");
const square = document.querySelector("div");

function createDiv() {
    for (i = 0; i < 256; i++) {
        // Create a new div element
        const newDiv = document.createElement('div');
        newDiv.classList.add("square")
        grid.appendChild(newDiv);
    }
};

square.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "purple";
});

function resetGrid() {
    grid.innerHTML = "";

    let userInput = prompt("how many number of grids would you like?")


}


createDiv();


