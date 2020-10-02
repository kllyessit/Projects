const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'cyan', 'gold', 'lime', 'navy', 'coral', 'teal', 'brown'];

document.body.style.backgroundColor = 'seagreen';

function changeColor() {
    /*
    Using Math.random to randomize the color displayed
    Console.log the random color position from the array
    Returning the random choice from the array
    Keypress detecting will change the background color
     */
    const colorDifference = parseInt(Math.random()*colors.length);
    console.log(colorDifference);
    return document.body.style.backgroundColor = colors[colorDifference];
}
document.addEventListener("keypress", changeColor);


