const grid = document.querySelector("#grid-container");
const changeSize = document.querySelector("#grid-size-button");
const resetGrid = document.querySelector("#resetGrid-button");
let gridSquare;

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    if (size <= 100) {
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        for (let i = 0; i < size * size; i++) {
            let div = document.createElement("div");
            div.classList.add("square");
            grid.appendChild(div);
        }
            gridSquare = document.querySelectorAll(".square");
            gridSquare.forEach((square) => {
            square.addEventListener("mouseover", (e) => {
            square.classList.add("activeGridColor");
            console.log("mousing over")
        });
    });
    } else {
    alert("Please select a number between 1 and 100!")
    createGrid(16);
}

}

resetGrid.addEventListener('click', () => {
    gridSquare.forEach((square) => {
        square.classList.remove("activeGridColor");
    });
});

changeSize.addEventListener("click", () => {
    gridSquare.forEach((square) => {
        square.classList.remove("activeGridColor");
    });
    size = prompt("How big should the next grid be? Please select 1-100");
    createGrid(size)
});

createGrid(16);


