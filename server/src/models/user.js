import Sequelize from 'sequelize';

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    user_type: { type: DataTypes.STRING },
  });

  User.associate = models => {
    User.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { username: login },
    });

    if (!user) {
      user = await User.findOne({
        where: { email: login },
      });
    }

    return user;
  };

  User.findByUsername = async (username = '') => {
    const user = await User.findOne({
      where: { username: username.toLowerCase() },
    });

    return user;
  };

  User.findAllUsers = async (username = '') => {
    const users = await User.findAll({
      where: {
        username: { [Sequelize.Op.ne]: username },
      },
    });
    return users;
  };

  return User;
};

export default user;
