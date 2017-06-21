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
  total: () => {
    let sum = ( acc, price ) => acc + price
    let prices = Cart.items.map((item) => item.price * 100)
    return prices.reduce(sum, 0.0) / 100
  },
  render: () => {
    const cartItemsHTML = Cart.items.map((item) => {
      return `
        <li class="item flex flex-row-between">
          <span class="item-name">${item.name}</span>
          <span class="item-price">$${item.price}</span>
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
  clearCartBtn: () => document.querySelector('#clear-cart-button'),
  cartItems: () => document.querySelector('#cart-items'),
  cartTotal: () => document.querySelector('#cart-total')
}

const ACTIONS = {
  addItemToCart: function(e) {
    e.preventDefault()

    const buttonElem = this
    const itemElem = buttonElem.parentElement

    const name = itemElem.querySelector('.item-name').innerText
    const priceText = itemElem.querySelector('.item-price').innerText
    const price = parseFloat(priceText.match(/\d+\.\d+/)[0])

    const item = { name, price }

    Cart.addItem(item)
    UI.refresh()
  },

  clearCart: function(e) {
    e.preventDefault()

    Cart.clear()
    UI.refresh()
  },
}

const UI = {
  refresh: function() {
    UI.updateItemCount()
    UI.updateCartItems()
    UI.updateCartTotal()
  },

  updateItemCount: function() {
    ELEMENTS.cartCount().innerText = `(${Cart.count()})`
  },

  updateCartItems: function() {
    ELEMENTS.cartItems().innerHTML = Cart.render()
  },

  updateCartTotal: function() {
    ELEMENTS.cartTotal().innerText = `$${Cart.total()}`
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
  },
}

// Load all app events
ELEMENTS.addToCartBtns().forEach((button) => {
  button.addEventListener('click', ACTIONS.addItemToCart)
})

ELEMENTS.clearCartBtn().addEventListener('click', ACTIONS.clearCart)

ELEMENTS.cartBtn().addEventListener('click', UI.showCartModal)
ELEMENTS.cartModalCloseBtn().addEventListener('click', UI.hideCartModal)
