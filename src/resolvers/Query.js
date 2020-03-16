const Query = {
  async users ({ userId }, args, context, info) {
    return context.prisma.query.users(
      { where: { id_not: userId } },
      info
    )
  },
  async me ({ userId }, args, context, info) {
    return context.prisma.query.user({ where: { id: userId } }, info)
  },
  async conversations (NULL, args, context, info) {
    return context.prisma.query.conversations(null, info)
  }
}

module.exports = { Query }
