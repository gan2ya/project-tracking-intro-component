const hamburger= document.getElementById('hamburger');
const close= document.getElementById('close');
const nav= document.getElementById('nav');

hamburger.addEventListener('click', Click);
close.addEventListener('click', Click);
function Click(){
    close.classList.toggle('show');
    hamburger.classList.toggle('show');
    nav.classList.toggle('show');
}