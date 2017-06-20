const ELEMENTS = {
  cartBtn: () => document.querySelector('#cart-button'),
  cartCount: () => document.querySelector('#cart-item-count'),
  addToCartBtns: () => document.querySelectorAll('.js-add-to-cart'),
  cartModalContainer: () => document.querySelector('.modal-container'),
  cartModalCloseBtn: () => document.querySelector('#modal-close-button')
}

const ACTIONS = {
  updateCartCount: function(e) {
    e.preventDefault()

    const count = getItemCount()
    setItemCount(count + 1)
  },
  showCartModal: function(e) {
    e.preventDefault()

    const modalContainer = ELEMENTS.cartModalContainer()

    modalContainer.style.display = 'inherit'
    modalContainer.style.visibility = 'visible'
  },
  hideCartModal: function(e) {
    e.preventDefault()

    const modalContainer = ELEMENTS.cartModalContainer()

    modalContainer.style.display = 'none'
    modalContainer.style.visibility = 'hidden'
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
    button.addEventListener('click', ACTIONS.updateCartCount)
  })

  ELEMENTS.cartBtn().addEventListener('click', ACTIONS.showCartModal)
  ELEMENTS.cartModalCloseBtn().addEventListener('click', ACTIONS.hideCartModal)
}

initializeListeners()
