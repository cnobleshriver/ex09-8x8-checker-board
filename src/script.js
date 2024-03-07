const printMe = (i, j) => {
  let piece = "blank starting square";
  if (i === 1 || i === 6) {
    piece = "Pawn";
  } else if (i === 0 || i === 7) {
    if (j === 0 || j === 7) {
      piece = "Rook";
    } else if (j === 1 || j === 6) {
      piece = "Knight";
    } else if (j === 2 || j === 5) {
      piece = "Bishop";
    } else if (j === 3) {
      piece = "Queen";
    } else {
      piece = "King";
    }
  }
  console.log("You clicked on (" + (i + 1) + ", " + (j + 1) + ")" + " which is a " + piece);
};

const build = () => {
  const numCols = 8,
    numRows = 8,
    pieces = [
      "rook",
      "knight",
      "bishop",
      "queen",
      "king",
      "bishop",
      "knight",
      "rook",
    ],
    theGrid = document.getElementById("theGrid");

  // TASK #2: Build The Chessboard Using JavaScript
  //
  // Build the chessboard with clicking application behavior
  // Add your implemention here.
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let square = document.createElement("div");
      let pieceText = "";
      square.classList.add("grid-item");
      if ((i + j) % 2 === 0) {
        square.classList.add("white-square");
      } else {
        square.classList.add("black-square");
      }
      if (i === 1 || i === 6) {
        square.appendChild(document.createTextNode("pawn"));
      } else if (i === 0 || i === 7) {
        square.appendChild(document.createTextNode(pieces[j]));
      }
      square.addEventListener("click", () => printMe(i, j));
      theGrid.appendChild(square);
    }
  }
};

build();
