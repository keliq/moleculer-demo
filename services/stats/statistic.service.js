module.exports = {
  name: 'statistic',
  actions: {
    calculate(ctx) {
      const { left, right, operator } = ctx.params
      return ctx.call(`math.${operator}`, { a: left, b: right })
    },
  },
}
