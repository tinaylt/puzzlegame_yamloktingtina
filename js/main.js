let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	resetButton = document.querySelector("#resetBut"),
	dragZone = document.querySelector(".puzzle-pieces"),
	draggedPiece;


    function changeBGImage() {
        puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)` 
    }

    function handleStartDrag() { 
        console.log('started dragging this piece:', this);
        draggedPiece = this;
    }

    function handleDragOver(event) {
        event.preventDefault();
        console.log('dragged over a zone!!!');
    }

    function handleDrop(event) {
        event.preventDefault();
		console.log('dropped on the Zone!!');
        this.appendChild(draggedPiece);
    }

    theButtons.forEach(button => button.addEventListener("click", changeBGImage));

    // add the drag event handling to the puzzle pieces
    puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
    
    dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
    
    dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));