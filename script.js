const text = document.getElementById('text');
const textArray = text.innerHTML.split(''); //décomposer le h1 en tableau


function randomVisibility() {
    return Math.random()< 0.5 ? 'visibility:hidden' : 'visibility:visible';
}