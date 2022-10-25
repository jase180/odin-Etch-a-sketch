function createGrid(n) {

    // query selectors
    let container = document.querySelector(".container");
    let allDivs = document.querySelectorAll("div")

    // for resetting (doesn't do anything on first run)
    allDivs.forEach(a => a.style.background = "blue") // use a here to show how to use forEach.  Better if use divs

    //Create grid with n 
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows =  `repeat(${n}, 1fr)`;

    //Fill the grid with divs with color and event listeners
    for (var i = 0; i < (n * n); i++) {
        let div = document.createElement("div");
        div.style.background = "blue";
        div.addEventListener("mouseover", () =>{
            div.style.background = "red";
        })
        container.insertAdjacentElement("beforeend", div);
    }
}

//button for changing things
let button = document.querySelector("button")
button.addEventListener('click', () =>{
    let n = prompt("Enter squares per side", 16)
    if (n<1 || n > 100) {
        alert("Enter 1 to 100 please")
    } else{
        createGrid(n)
    }
    console.log("I was clicked")
})

//initial Grid of 16
createGrid(16)



