/*
Neon Pink: #ff0099
Neon Yellow: #f3f315
Neon Green: #83f52c
Neon Orange: #ff6600
Neon Purple: #6e0dd0
 */
function enter() {
    const input = document.getElementById('userInput');
    try {
        //Retrieving the list
        const ul = document.querySelector('ul');
        const li = document.createElement('li');

        //Appending into list and returning value to empty
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = '';


        const colors = ['#ff0099', '#f3f315', '#83f52c', '#ff6600', '#6e0dd0'];
        const colorDifference = parseInt(Math.random() * colors.length);
        li.style.borderColor = colors[colorDifference];

        const dBtn = document.createElement("button");
        dBtn.appendChild(document.createTextNode("X"));
        li.appendChild(dBtn);
        dBtn.style.marginLeft = '3rem';
        dBtn.style.borderColor = 'black';
        dBtn.addEventListener("click", deleteListItem);

        function crossOut() {
            li.classList.toggle("done");
        }
        li.addEventListener("click", crossOut);

        function deleteListItem() {
            ul.removeChild(li);
        }
    }
            catch (e) {
        console.log(e);
    }
}
function addListAfterClick(){
    const input = document.getElementById('userInput');
    const inputValue = input.value.length;
    if (inputValue > 0) { //makes sure that an empty input field doesn't create a li
        enter();
    }
}
