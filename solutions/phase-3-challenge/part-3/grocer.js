// Cart data store
const Cart = {
  items: [],
  count: () => {
    return Cart.items.length
  },
  addItem: (item) => {
    Cart.items.push(item)
    return Cart
  },
  clear: () => {
    Cart.items = []
    return Cart
  },
  render: () => {
    const cartItemsHTML = Cart.items.map((item) => {
      return `
        <li class="item flex flex-row-between">
          <span class="item-name">${item.name}</span>
          <span class="item-price">${item.price}</span>
        </li>
      `
    }).join("\n")

    return `
      <ul class="item-section">
        ${cartItemsHTML}
      </ul>
    `
  }
}

const ELEMENTS = {
  cartBtn: () => document.querySelector('#cart-button'),
  cartCount: () => document.querySelector('#cart-item-count'),
  addToCartBtns: () => document.querySelectorAll('.js-add-to-cart'),
  cartModalContainer: () => document.querySelector('.modal-container'),
  cartModalCloseBtn: () => document.querySelector('#modal-close-button'),
  cartItems: () => document.querySelector('#cart-items')
}

const ACTIONS = {
  addItemToCart: function(e) {
    e.preventDefault()

    const buttonElem = this
    const itemElem = buttonElem.parentElement

    const name = itemElem.querySelector('.item-name').innerText
    const price = itemElem.querySelector('.item-price').innerText

    const item = { name, price }

    Cart.addItem(item)
    updateItemCount()
  },

  showCartModal: function(e) {
    e.preventDefault()

    const modalContainer = ELEMENTS.cartModalContainer()

    modalContainer.style.display = 'inherit'
    modalContainer.style.visibility = 'visible'

    ELEMENTS.cartItems().innerHTML = Cart.render()
  },

  hideCartModal: function(e) {
    e.preventDefault()

    const modalContainer = ELEMENTS.cartModalContainer()

    modalContainer.style.display = 'none'
    modalContainer.style.visibility = 'hidden'
  }
}

function updateItemCount() {
  ELEMENTS.cartCount().innerText = `(${Cart.count()})`
}

function initializeListeners() {
  ELEMENTS.addToCartBtns().forEach((button) => {
    button.addEventListener('click', ACTIONS.addItemToCart)
  })

  ELEMENTS.cartBtn().addEventListener('click', ACTIONS.showCartModal)
  ELEMENTS.cartModalCloseBtn().addEventListener('click', ACTIONS.hideCartModal)
}

initializeListeners()
