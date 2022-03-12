const container = document.querySelector("#squares");

document.body.style.backgroundColor = "red";

function newSquare(size) {
    if (size <= 100) {
        return size*size - 1;
    }

    else {
        alert("Size too big, defaulting to 16x16");
        return 255;
    }
}



for (let i = 0; i <= 255; i++) {
    

    let div  = document.createElement('div');
    
    div.setAttribute('style', 'display: grid; margin-right: 0px; gap: 0; width: 60%; height: 0; padding-top: 60%; margin: 10px; background-color: white; justify-content: center;')
    div.classList.add("sq");
    //div.textContent = "test";
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "black";
        console.log("test");
    });

    
    
    
    container.appendChild(div)
    
}


container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, 0.5fr); width: 75%; justfiy-content: center')