module.exports = {
  name: 'math',
  actions: {
    add(ctx) {
      const { a, b } = ctx.params
      return a + b
    },
    subtract(ctx) {
      const { a, b } = ctx.params
      return a - b
    },
    multiply: {
      params: {
        a: { type: 'number' },
        b: { type: 'number' },
      },
      handler(ctx) {
        const { a, b } = ctx.params
        return a * b
      },
    },
    divide(ctx) {
      const { a, b } = ctx.params
      if (b != 0) return a / b
      else throw new Error('除数不能为零！')
    },
  },
}
