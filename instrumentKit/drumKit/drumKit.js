/*
Checking the key that is being press.
If the key we are looking for is pressed, a sound from a drum kit will play.
 */
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 65) {
        var audio = new Audio('./Sounds/clap.wav');
        audio.play();
    } else if (e.keyCode == 83) {
        var audio = new Audio('./Sounds/hihat.wav');
        audio.play();
    } else if (e.keyCode == 68) {
        var audio = new Audio('./Sounds/kick.wav');
        audio.play();
    } else if (e.keyCode == 70) {
        var audio = new Audio('./Sounds/openhat.wav');
        audio.play();
    } else if (e.keyCode == 71) {
        var audio = new Audio('./Sounds/boom.wav');
        audio.play();
    } else if (e.keyCode == 72) {
        var audio = new Audio('./Sounds/ride.wav');
        audio.play();
    } else if (e.keyCode == 74) {
        var audio = new Audio('./Sounds/snare.wav');
        audio.play();
    } else if (e.keyCode == 75) {
        var audio = new Audio('./Sounds/tom.wav');
        audio.play();
    } else if (e.keyCode == 76) {
        var audio = new Audio('./Sounds/tink.wav');
        audio.play();
    }
});

