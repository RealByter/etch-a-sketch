const gridSize = 960;

const generateGrid = squaresPerSide => {
	const squareSize = gridSize / squaresPerSide;

	for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
		const newSquare = document.createElement('div');
		newSquare.style.width = `${squareSize}px`;
		newSquare.style.height = `${squareSize}px`;
		grid.appendChild(newSquare);
	}
};

generateGrid(30);
