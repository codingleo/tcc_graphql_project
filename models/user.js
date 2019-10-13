import Sequelize from 'sequelize'
import { sequelize } from './index'

const User = sequelize.define('User', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthDate: {
    type: Sequelize.DATE
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: true
})
User.associate = function (models) {
  // associations can be defined here
}

export default User
