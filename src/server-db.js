const path = require('path')
const { ServiceBroker } = require('moleculer')
const DbService = require('moleculer-db')
const mongoose = require('mongoose')
const MongooseAdapter = require('moleculer-db-adapter-mongoose')
const options = require('./moleculer.config')
const broker = new ServiceBroker(options)
broker.createService({
  name: 'order',
  mixins: [DbService],
  adapter: new MongooseAdapter('mongodb://localhost:27017/test'),
  model: mongoose.model(
    'order',
    mongoose.Schema({
      orderNo: { type: String },
      price: { type: Number, default: 0 },
    })
  ),
})
broker.start().catch((e) => console.error(e))
