const grid = document.getElementById('grid');
const gridSize = 960;

const generateGrid = squaresPerSide => {
	const squareSize = gridSize / squaresPerSide;

	for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
		const newSquare = document.createElement('div');
		newSquare.style.width = `${squareSize}px`;
		newSquare.style.height = `${squareSize}px`;
		newSquare.addEventListener('mouseover', e => {
			e.target.style.backgroundColor = '#000000';
		});
		grid.appendChild(newSquare);
	}
};

const changeGridButton = document.getElementById('change-grid');
changeGridButton.addEventListener('click', () => {
	let newSquaresPerSide = parseInt(
		prompt('Enter the new number of square by size (maximum is 100):')
	);

	if (newSquaresPerSide > 100) {
		newSquaresPerSide = 100;
	} else if (newSquaresPerSide <= 1) {
		newSquaresPerSide = 1;
	}

	grid.textContent = '';
  generateGrid(newSquaresPerSide);
});

generateGrid(30);
