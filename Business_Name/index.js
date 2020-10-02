cardBtn = document.getElementsByClassName("cardBtn")

function myFunction(myElementName) {
    var myArray = ["Hello", "Hola", "안녕하세요"];

    console.log(myElementName)

    

    var x = document.getElementsByClassName("card__description");
    x[0].innerHTML = myArray[0];
    x[1].innerHTML = myArray[1];
    x[2].innerHTML = myArray[2];
};