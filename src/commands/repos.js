
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Starbot',
  icon_emoji: config('ICON_EMOJI'),
  text: 'wah-wah'
}

const handler = (payload, res) => {
  res.set('content-type', 'application/json')
  res.status(200).json(msgDefaults)
  return
}

module.exports = { pattern: /repos/ig, handler: handler }
