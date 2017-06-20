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
    updateItemCount()
  },

  showCartModal: function(e) {
    e.preventDefault()

    const modalContainer = ELEMENTS.cartModalContainer()

    modalContainer.style.display = 'inherit'
    modalContainer.style.visibility = 'visible'

    ELEMENTS.cartItems().innerHTML = Cart.render()
    updateCartTotal()
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

function updateCartTotal() {
  ELEMENTS.cartTotal().innerText = `$${Cart.total()}`
}

function initializeListeners() {
  ELEMENTS.addToCartBtns().forEach((button) => {
    button.addEventListener('click', ACTIONS.addItemToCart)
  })

  ELEMENTS.cartBtn().addEventListener('click', ACTIONS.showCartModal)
  ELEMENTS.cartModalCloseBtn().addEventListener('click', ACTIONS.hideCartModal)
}

initializeListeners()
