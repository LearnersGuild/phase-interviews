const ELEMENTS = {
  cartCount: () => document.querySelector('#cart-item-count'),
  addToCartBtns: () => document.querySelectorAll('.js-add-to-cart')
}

const EVENTS = {
  addToCartPressed: function(evt) {
    const count = getItemCount()
    setItemCount(count + 1)
  }
}

function getItemCount() {
  const count = ELEMENTS.cartCount().innerText.match(/\d+/)[0]
  return Number(count)
}

function setItemCount(count) {
  ELEMENTS.cartCount().innerText = `(${count})`
}

function initializeListeners() {
  ELEMENTS.addToCartBtns().forEach((button) => {
    button.addEventListener('click', EVENTS.addToCartPressed)
  })
}

initializeListeners()
