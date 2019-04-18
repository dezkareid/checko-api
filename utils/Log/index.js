function LogError (error, req, res, next) {
  console.error(error.message)
  next(error)
}

module.exports = {
  LogError
}
