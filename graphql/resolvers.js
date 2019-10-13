import db from '../models/index'

const resolvers = {
  Query: {
    users: () => db.User.findAll(),
    user: (root, { id }) => db.User.findByPk(id)
  }
}

export default resolvers
