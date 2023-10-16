// Define the game folders
const gameFolders = [
    "game1", "game2", "game3", "game4", "game5",
    // Add the remaining game folders here
];
// Find the gameTableContainer element
const gameTableContainer = document.getElementById("gameTableContainer");
if (gameTableContainer) {
    // Create a container div for the game list
    const gameListContainer = document.createElement("div");
    gameListContainer.className = "game-list-container"; // You can define a CSS class for styling
    // Create game elements and add them to the container
    gameFolders.forEach((gameFolder) => {
        // Create a div for each game
        const gameDiv = document.createElement("div");
        gameDiv.className = "game-item"; // You can define a CSS class for styling
        gameDiv.textContent = gameFolder;
        // Append the game div to the container
        gameListContainer.appendChild(gameDiv);
    });
    // Append the game list container to the main container
    gameTableContainer.appendChild(gameListContainer);
}
