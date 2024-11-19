function getUser(req, res, next) {
    const user = JSON.parse(atob(req.headers.authorization.split('.')[1]))
    req.user = user
    next()
}

module.exports = getUser
