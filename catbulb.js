let bulbImageElement = document.getElementById("bulbImage");
let catImageElement = document.getElementById("catImage");
let switchBoardHeadingElement = document.getElementById("switchBoardHeading");
let bulbImage = document.getElementById("bulbImage");
let catImage = document.getElementById("catImage");
let switchOffbutton = document.getElementById("switchOff");
let switchOnbutton = document.getElementById("switchOn");

function switchOff() {
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchBoardHeadingElement.textContent = "Switched Off";
    switchOffbutton.style.backgroundColor = "#cbd2d9";
    switchOnbutton.style.backgroundColor = "#22c55e";
}

function switchOn() {
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchBoardHeadingElement.textContent = "Switched On";
    switchOffbutton.style.backgroundColor = "#e12d39";
    switchOnbutton.style.backgroundColor = "#cbd2d9";
}