let board = document.querySelector("#board");
let settings = document.querySelector("#settings");
let clearButton = document.querySelector("#clearBoard");
let resizeBoard = document.querySelector("#changeSize")
let totalWH = 500;


function createColumn() {
    let col = document.createElement("div");
    col.classList.add("column");
    document.getElementById("board").appendChild(col);
    return col;
}

function createSquare(size) {
//Creates the square with the correct size.
    let dimensions = totalWH / size + "px";
    
    let div = document.createElement("div");
    div.style.width = dimensions;
    div.style.height = dimensions;
    div.classList.add("square");
//Event listeners for the drawing and clearing of the board.   
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
    });
    clearButton.addEventListener("click", () => {
        div.style.backgroundColor = "#e1e8eb";
    });
    
    return div;
}
counter = 0;
function createBoard(size) {
    if (size > 100) {
        return alert("You input a value over 100! Try again");
    }

    for (let i = 0; i < size; i++) {
        //create column
        let column = createColumn();
        

        for (let j = 0; j < size; j++) {
            //add squares to column
            let square = createSquare(size);

            column.appendChild(square);
            counter++;
        }
    }
    
}

resizeBoard.addEventListener('click', () => {
    
    let prompt = document.createElement("input");
    let confirm = document.createElement("button");
    confirm.classList.add("buttons");
    prompt.setAttribute('type', 'number');
    prompt.setAttribute('placeholder', 'Enter new board size here, (max 100)');
    confirm.innerHTML = "Confirm";
    settings.appendChild(prompt);
    settings.appendChild(confirm);

    confirm.addEventListener('click', () => {
        prompt.style.display = "none";
        confirm.style.display = "none";
        board.innerHTML = "";
        createBoard(prompt.value);
    });

});

createBoard(16);




console.log(counter)

