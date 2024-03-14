import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

// Authentication middleware
function authenticate(req, res, next) {
  const token = req.cookies.auth_token // Assuming your cookie is named 'auth_token'

  // Log for debugging purposes
  console.log('Cookies:', req.cookies)
  console.log('Token extracted from cookie:', token)

  if (!token) {
    return res.status(403).send({ message: 'No token provided.' })
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Failed to authenticate token.' })
    }

    req.user = decoded // Assuming your JWT contains user info
    next()
  })
}

export default authenticate
