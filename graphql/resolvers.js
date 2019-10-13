import User from '../models/user'

const resolvers = {
  Query: {
    users: () => User.findAll(),
    user: (root, { id }) => User.findByPk(id)
  }
}

export default resolvers
