

const container = document.querySelector("#squares");
document.body.style.backgroundColor = "red";

let sqsize = 255;

function button2() {
    location.reload();
}


function button() {
    
    
    let size = prompt("What should the side length be?");

    if (size <= 100) {
        sqsize =  size*size - 1;
    }

    else {
        alert("Size too big, defaulting to 16x16");
        sqsize = 255;
    }

    
}

button()

for (let i = 0; i <= sqsize; i++) {
    

    let div  = document.createElement('div');
    
    div.setAttribute('style', 'display: grid; margin: 0%; gap: 0; width: 75%; height: 0; padding-top: 75%; background-color: white; justify-content: center; margin-bottom: 20%')
    div.classList.add("sq");
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "black";
        
    });
    container.appendChild(div)
    
}

container.setAttribute('style', 'display: grid; grid-template-columns: repeat(' + Math.sqrt(sqsize+1) +', 0.5fr); width: 40%; height: 40%; justfiy-content: center')

