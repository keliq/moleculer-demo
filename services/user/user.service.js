module.exports = {
  name: 'user',
  actions: {
    async get(ctx) {
      const { id } = ctx.params
      const age = await ctx.call('math.multiply', { a: 3, b: 10 })
      return { id, age }
    },
  },
}
