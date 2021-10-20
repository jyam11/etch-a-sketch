const grid = document.querySelector("#grid-container");
const changeGridSize = document.querySelector("#grid-size-button");
const resetGrid = document.querySelector("#resetGrid-button");
let gridSquare;

function createGrid(size) {
    //Using the number entered in the prompt to dictate grid size.
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //Number user enters has to be less than 100.
    if (size <= 100) {
        //added this to destroy all the divs in the existing grid, before creating the new one.
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        //Create new divs based on the number the user has selected, and append those new divs to the grid container. Add the class 'square' to each
        //one of the new divs.
        for (let i = 0; i < size * size; i++) {
            let div = document.createElement("div");
            div.classList.add("square");
            grid.appendChild(div);
        }
        //Select all of the divs that contain the square class, and loop through with the foreach() loop to add an event listener to each one that upon
        //mouseover, add the activeGridColor class which has a background-color of black.
            gridSquare = document.querySelectorAll(".square");
            gridSquare.forEach((square) => {
            square.addEventListener("mouseover", (e) => {
            square.classList.add("activeGridColor");
        });
    });
    } else {
        //If user selects a number over 100, send an alert, and than revert back to the default 16x16 grid.
        alert("Please select a number between 1 and 100!")
        createGrid(16);
}

}

//Added event listener to reset button, that when clicked, it will remove the 'activeGridColor' class from each div that has the class 'square'
resetGrid.addEventListener('click', () => {
    gridSquare.forEach((square) => {
        square.classList.remove("activeGridColor");
    });
});

//Added event listener to change grid size button, that when selected, it will remove the 'activeFridColor' class from each div that has the class 'square'
//Then a new prompt will display, and will call the createGrid() function with the number entered into the prompt.
changeGridSize.addEventListener("click", () => {
    gridSquare.forEach((square) => {
        square.classList.remove("activeGridColor");
    });
    size = prompt("How big should the next grid be? Please select 1-100");
    createGrid(size)
});

//default grid size of 16x16
createGrid(16);


