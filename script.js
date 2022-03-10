const container = document.querySelector("#squares");

for (let i = 0; i <= 256; i++) {
    let div  = document.createElement('div');
    div.setAttribute('style', 'border-color: black; background-color: red');
    container.append(div)
}
