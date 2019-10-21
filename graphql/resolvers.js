import User from '../models/user'

const resolvers = {
  Query: {
    users: async () => User.findAll(),
    user: async (root, { id }) => User.findByPk(id)
  },
  Mutation: {
    newUser: async (root, { input }) => User.create({ ...input }),
    updateUser: async (root, { id, input }) => User.update({ ...input }, { where: { id } }).then(() => User.findByPk(id)),
    destroyUser: async(root, { id }) => User.destroy({ where: { id } })
  }
}

export default resolvers
