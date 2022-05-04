//----Automatic popup----//

const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block";
        //agrego un delay para que se muestre//
    }, 2000)
}
close.addEventListener('click', ()=> {
    popup.style.display = "none";
})
