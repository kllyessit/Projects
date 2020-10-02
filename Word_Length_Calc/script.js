function countChar(text) {
    /*
    Accessing the output to display the amount of characters are in the text area
    Console.log to keep track that the numbers match
     */
    document.getElementById("output").innerText = text.value.length;
    console.log(text.value.length);
}

function reset() {
    /*
    Reseting the text area and output
     */
    document.getElementById('text-frame').value = '';
    document.getElementById("output").innerText = '0'
}
