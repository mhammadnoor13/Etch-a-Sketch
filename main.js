
const gridContainer = document.querySelector("#container");
const button = document.querySelector("#newGridButton");
const gridSize = 960; // Fixed width and height of the container



// Function to create a grid based on user input
function createGrid(squaresPerSide) {
    gridContainer.innerHTML = ""; // Clear any existing grid

    // Set up container dimensions for a flexible grid layout
    gridContainer.style.width = `${gridSize}px`;
    gridContainer.style.height = `${gridSize}px`;

    // Calculate size of each square
    const squareSize = gridSize / squaresPerSide;
    for ( let i = 0 ; i<squaresPerSide  ;i++)
        {
            var row = document.createElement("div");
            row.classList.add("grid-row");
            for ( let j =0 ; j<squaresPerSide ;j++)
                {
                    const column = document.createElement("div");
                    column.classList.add("grid-column");
                    column.style.width=`${squareSize}px`;
                    column.style.height=`${squareSize}px`;
                    
                    column.addEventListener("mouseenter", () => {
                    column.style.backgroundColor = "blue"; // Change color on hover
                    
                    });
                    column.addEventListener("mouseleave", () => {
                    column.style.backgroundColor = "black"; // Revert color on mouse leave
        
                    });
                    row.appendChild(column);
                }
                gridContainer.appendChild(row);
        }
}



// Event listener for the button
button.addEventListener("click", () => {
    let squaresPerSide = parseInt(prompt("Enter the number of squares per side (maximum 100):"));

    // Validate user input
    if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(squaresPerSide); // Generate new grid with the specified size
});

// Initialize with a default 16x16 grid
createGrid(16);


