module.exports = {
  name: 'account',
  actions: {
    login(ctx) {
      const { username, password } = ctx.params
      return { success: true }
    },
  },
}
