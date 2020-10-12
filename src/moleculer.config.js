module.exports = {
  // moleculer 支持多种传输介质
  transporter: 'nats://localhost:4222', // 使用 nats 传输介质
  // transporter: 'redis://localhost:6379', // 使用 redis 传输介质
  // transporter: 'kafka://localhost:2181', // 使用 kafka 传输介质
  // transporter: 'mqtt://localhost:1883', // 使用 mqtt 传输介质
  // transporter: "amqp://localhost:5672", // 使用 amqp 传输介质
}
