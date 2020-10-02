/*
Detect when user adjust border size
Adjust border size

Detect when user adjust blur affect
Adjust blur of image

Detect when user changes color
Change color of border and the letters JS

1px = 0.0625rem
MAX: 6rem (100px)
MIN: 0.0625 (1px)

borderwidth (change border size)
bordercolor (change border color)
 */
const border_input = document.querySelectorAll('input')[0];
const blur_input = document.querySelectorAll('input')[1];
const color_input = document.querySelectorAll('input')[2];
const image = document.querySelector('img');

try {
    console.log(border_input.value === 1 || blur_input.value === 1);
    border_input.addEventListener('change', function () {
        image.style.borderWidth = border_input.value * 0.0625 + 'rem';
    });

    blur_input.addEventListener('change', function () {
        const blur_value = blur_input.value * 0.0625 + 'rem';
        image.style.setProperty('filter', 'blur(' + blur_value + ')');
        image.style.setProperty('-webkit-filter', 'blur(' + blur_value + ')');
    });

    color_input.addEventListener('change', function () {
        image.style.borderColor = color_input.value;
    });
} catch (err) {
    alert('Oops! There seems to be an issue! Email, kllyessit@aol.com, with the error and will be fixed ASAP! \n' + err.message)
}
