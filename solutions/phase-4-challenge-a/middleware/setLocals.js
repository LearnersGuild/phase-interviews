const setLocals = (request, response, next) => {
  response.locals = {
    user: request.user
  }

  next()
}

module.exports = setLocals