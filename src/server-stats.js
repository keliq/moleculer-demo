const path = require('path')
const { ServiceBroker } = require('moleculer')
const options = require('./moleculer.config')
const broker = new ServiceBroker(options)
broker.loadServices(path.join(__dirname, '../services/stats'))
broker.start().catch((e) => console.error(e))

