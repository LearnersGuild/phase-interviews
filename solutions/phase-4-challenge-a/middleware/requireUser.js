const requireUser = (request, response, next) => {
  if( request.user !== undefined ) {
    next()
  } else {
    response.status(403).render('unauthorized')
  }
}

module.exports = requireUser