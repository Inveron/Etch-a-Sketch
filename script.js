const container = document.querySelector("#squares");



for (let i = 0; i <= 256; i++) {
    

    let div  = document.createElement('div');

    div.setAttribute('style', 'width: 2%; height: 0; padding-top: 2%; margin: 10px; background-color: black; position: relative')
    div.textContent = "test";
    container.appendChild(div)
}


container.setAttribute('style', 'display: flex;')