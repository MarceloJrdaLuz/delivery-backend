const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

export default function generateToken (params = {}) {
  return jwt.sign(params, process.env.AUTH_SECRET, {
    expiresIn: 86400
  })
}
