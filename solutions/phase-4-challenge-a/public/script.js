const deleteReview = event => {
  const result = confirm('Are you sure you want to delete this review?')

  if( ! result ) {
    event.preventDefault()
  }

  return result
}

Array.from( document.querySelectorAll('a.delete-review')).forEach( link => {
  link.addEventListener('click', deleteReview, { capture: false })
})
