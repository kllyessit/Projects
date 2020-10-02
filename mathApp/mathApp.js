const equKind = ['+', '*', '-'];
const version = parseInt(Math.random()*equKind.length);

const changeNum = () => {
    document.getElementById("firstNum").innerHTML = Math.floor((Math.random() * 100) + 1);
    document.getElementById("secondNum").innerHTML = Math.floor((Math.random() * 100) + 1);
    document.getElementById("equKind").innerText = equKind[version];
};
const display = () => {
    document.getElementById("container").style.display = "block";
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("header").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "hidden";
    changeNum()
};
const correct = () => {
    let correctAns;
    const textArea = parseInt(document.getElementById("text").value);
    const firstNum = parseInt(document.getElementById("firstNum").innerText);
    const secNum = parseInt(document.getElementById("secondNum").innerText);
    const equation = document.getElementById("equKind").innerText;

    if (equation === "+") {
        correctAns = firstNum+secNum;
        changeNum()
    } else if (equation === "-") {
        correctAns = firstNum-secNum;
        changeNum()
    } else if (equation === "*") {
        correctAns = firstNum*secNum;
        changeNum()
    }
    console.log(correctAns);
    if (correctAns === textArea) {
        alert("Correct!")

    } else {
        alert("Incorrect!")
    }
};
