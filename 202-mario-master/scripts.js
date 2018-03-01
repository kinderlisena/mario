let mario = document.querySelector('.mario');
let som = new Audio('pipe.wav');

function descer(){
    mario.style.transform = 'translateY(100px)';
    som.play();
}

function subir(){
    mario.style.transform = 'translateY(0)';
    som.play();
}
