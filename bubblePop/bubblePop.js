let popped = 0;

document.addEventListener('mouseover', function(e){

    if (e.target.className === "bubble"){
        e.target.style.backgroundColor = "#FFFAE2";
        e.target.textContent = "POP!";
        popped++;
        checkAllPopped();
    }
});
const checkAllPopped = () => {
    if (popped === 25){
        console.log('all popped!');
        const bubble = document.getElementsByClassName("bubble-content");
        let message = document.getElementById("message");
        bubble.innerHTML = '';
        message.style.display = 'block';
    }
};
