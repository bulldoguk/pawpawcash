import { plaid } from '../../../config'
const axios = require('axios')

const instance = axios.default.create({
  baseURL: `${plaid.baseurl}/`,
  timeout: 30000
})

module.exports = instance
