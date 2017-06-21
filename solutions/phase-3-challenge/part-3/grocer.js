// Manage cart state, and wrap
const Cart = {
  items: [],

  count: () => Cart.items.length,

  addItem: (item) => {
    Cart.items.push(item)
    return Cart
  },

  clear: () => {
    Cart.items = []
    return Cart
  },

  total: () => {
    const sum = (acc, price) => acc + price
    const prices = Cart.items.map((item) => item.price * 100)
    return prices.reduce(sum, 0.0) / 100
  },
}

// Utility function to parse item data from the element
const parseItem = (itemElem) => {
  const name = itemElem.querySelector('.item-name').innerText
  const priceText = itemElem.querySelector('.item-price').innerText
  const price = parseFloat(priceText.match(/\d+\.\d+/)[0])

  return { name, price }
}

// Primary user actions
const ACTIONS = {
  addItemToCart: function(e) {
    e.preventDefault()

    const buttonElem = this
    const itemElem = buttonElem.parentElement

    const item = parseItem(itemElem)

    Cart.addItem(item)
    UI.refresh()
  },

  clearCart: function(e) {
    e.preventDefault()

    Cart.clear()
    UI.refresh()
  },
}

// Main interactive elements
const ELEMENTS = {
  modalContainer: () => document.querySelector('.modal-container'),

  modalCloseBtn: () => document.querySelector('.js-modal-close'),
  modalOpenBtn: () => document.querySelector('.js-modal-open'),

  addToCartBtns: () => document.querySelectorAll('.js-add-to-cart'),
  clearCartBtn: () => document.querySelector('.js-clear-cart'),

  cartCount: () => document.querySelector('.js-cart-count'),
  cartItems: () => document.querySelector('.js-cart-items'),
  cartTotal: () => document.querySelector('.js-cart-total'),
}

// User interface
const UI = {
  refresh: () => {
    UI.renderCartCount()
    UI.renderCartItems()
    UI.renderCartTotal()
  },

  renderCartCount: () => {
    ELEMENTS.cartCount().innerText = `(${Cart.count()})`
  },

  renderCartItems: () => {
    const items = Cart.items.map((item) => {
      return `
        <li class="item flex flex-row-between">
          <span class="item-name">${item.name}</span>
          <span class="item-price">$${item.price}</span>
        </li>
      `
    }).join("\n")

    const itemsList = `
      <ul class="item-section">
        ${items}
      </ul>
    `

    ELEMENTS.cartItems().innerHTML = itemsList
  },

  renderCartTotal: () => {
    ELEMENTS.cartTotal().innerText = `$${Cart.total()}`
  },

  showModal: function(e) {
    e.preventDefault()

    const modalContainer = ELEMENTS.modalContainer()

    modalContainer.style.display = 'inherit'
    modalContainer.style.visibility = 'visible'
  },

  hideModal: function(e) {
    e.preventDefault()

    const modalContainer = ELEMENTS.modalContainer()

    modalContainer.style.display = 'none'
    modalContainer.style.visibility = 'hidden'
  },
}

// Load all app event listeners
ELEMENTS.addToCartBtns().forEach((btn) => {
  btn.addEventListener('click', ACTIONS.addItemToCart)
})

ELEMENTS.clearCartBtn().addEventListener('click', ACTIONS.clearCart)

ELEMENTS.modalOpenBtn().addEventListener('click', UI.showModal)
ELEMENTS.modalCloseBtn().addEventListener('click', UI.hideModal)
