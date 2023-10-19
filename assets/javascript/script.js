function imgSlider(anything) {
    document.querySelector('.img_slider').src = "./assets/img/" + anything;
}

function changeBackgroundCircle (color) {
    const circle = document.getElementById('circle');
    circle.style.backgroundColor = color;
}