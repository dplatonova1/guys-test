const cart = document.querySelector('.cart');
const page = document.querySelector('.page');

function closeCart(){
    cart.setAttribute('style', 'opacity: 0')
}

function openCart(){
    cart.setAttribute('style', 'opacity: 1')
}

document.addEventListener('click', (ev)=>{
    if(ev.target.closest('.product__add')){
        openCart()
        page.classList.add('page__overlay')
        setTimeout(()=>{closeCart()}, 3000)
    } 
    else if(ev.target.closest('.page__overlay')){
        closeCart()
    }
})

