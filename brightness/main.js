// LUMINENCE CALCULATOR
// function
document.getElementById("btn").addEventListener("click", findBrightness);
function findBrightness(){
//input
let R = +prompt("Enter a R color value (Red):");
let G = +prompt("Enter a G color value (Green):");
let B = +prompt("Enter a B color value (Blue):");

console.log(R, G, B)

//process
let brightness = Math.sqrt(0.299 * (R) ** 2 + 0.587 * (G) ** 2 + 0.114 * (B) ** 2);


//output
alert(`The brightness is: ${brightness}`);
}