const container = document.querySelector("#squares");


function hover () {
    
}


for (let i = 0; i <= 255; i++) {
    

    let div  = document.createElement('div');

    div.setAttribute('style', 'display: grid; gap: 0; width: 40%; height: 0; padding-top: 40%; margin: 5px; background-color: black; position: relative')
    div.classList.add("sq");
    //div.textContent = "test";
    div.addEventListener('hover', hover());
    container.appendChild(div)
}


container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, 16fr); column-gap: 0; grid-column-gap: 0; gap: 0; justify-content: center;')