const cart = document.querySelector('.cart');
const productInfo = document.querySelector('.product__info');

function timer(){
    
}



productInfo.addEventListener('click', (ev)=>{
    if(ev.target.closest('.product__add')){
        cart.setAttribute('style', 'display: block')
    }
})