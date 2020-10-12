const { ServiceBroker } = require('moleculer')
const options = require('./moleculer.config')
const broker = new ServiceBroker(options)
const readline = require('readline')
const yargsParser = require('yargs-parser')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

broker
  .start()
  .then(async () => {
    let res
    /*---------- stats 节点 ----------*/
    res = await broker.call('math.add', { a: 5, b: 3 })
    console.log('相加结果为', res)
    res = await broker.call('statistic.calculate', {
      left: 5,
      right: 3,
      operator: 'subtract',
    })
    console.log('统计结果为', res)
    /*---------- user 节点 ----------*/
    res = await broker.call('account.login', {
      username: 'zhangsan',
      password: '123456',
    })
    console.log('登录返回结果', res)
    res = await broker.call('user.get', { id: 1 })
    console.log('用户信息', res)

    // 命令行输入参数，例如：math.add --a=3 --b=4 或 user.get --id=1 等
    rl.on('line', async (text = '') => {
      const { _, ...rest } = yargsParser(text)
      res = await broker.call(_[0], rest)
      console.log('返回结果', res)
    })
  })
  .catch((err) => console.error('调用出错', err))
