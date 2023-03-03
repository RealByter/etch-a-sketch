const grid = document.getElementById('grid');
const gridSize = 960;

const generateRandom = (min = 0, max = 359) => {
	const difference = max - min;
	let rand = Math.random();
	rand = Math.floor(rand * difference);
	rand = rand + min;
	return rand;
};

const squareHoverHandler = e => {
	// Get the background color for the current square
	let bgColor = +e.target.getAttribute('data-color');
	if (!bgColor) {
		bgColor = generateRandom();
		e.target.setAttribute('data-color', bgColor);
	}

	// Get the lightness 10% lower
	let lightness = e.target.getAttribute('data-lightness');
	if (!lightness) {
		lightness = 90;
	} else if (lightness > 0) {
		lightness -= 10;
	}
	e.target.setAttribute('data-lightness', lightness);

  // Set the new background color and lightness
	e.target.style.backgroundColor = `hsl(${bgColor}, 100%, ${lightness}%)`;
};

const generateGrid = squaresPerSide => {
	const squareSize = gridSize / squaresPerSide;

	// Creating the grid
	for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
		// Creating a new square and setting its dimensions relative to the grid size and squares per side
		const newSquare = document.createElement('div');
		newSquare.style.width = `${squareSize}px`;
		newSquare.style.height = `${squareSize}px`;
		newSquare.addEventListener('mouseover', squareHoverHandler);
		grid.appendChild(newSquare);
	}
};

// Listening for the change grid button click event
const changeGridButton = document.getElementById('change-grid');
changeGridButton.addEventListener('click', () => {
	// Getting a new squares per side number between 1 and 100 from the user
	let newSquaresPerSide = parseInt(
		prompt('Enter the new number of square by size (maximum is 100):')
	);

	if (newSquaresPerSide > 100) {
		newSquaresPerSide = 100;
	} else if (newSquaresPerSide <= 1) {
		newSquaresPerSide = 1;
	}

	// Generating a new grid with the new squares per side number
	grid.textContent = '';
	generateGrid(newSquaresPerSide);
});

// Generating a default grid
generateGrid(20);
