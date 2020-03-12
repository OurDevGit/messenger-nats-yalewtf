import { Op } from 'sequelize';

const message = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    message: { allowNull: false, type: DataTypes.STRING },
  });

  Message.associate = models => {
    Message.belongsTo(models.User, {
      foreignKey: 'publisher',
      targetKey: 'username',
    });
    Message.belongsTo(models.User, {
      foreignKey: 'subscriber',
      targetKey: 'username',
    });
  };

  Message.findPrevMessages = async (pub, sub) => {
    const messages = await Message.findAll({
      where: {
        [Op.and]: [
          {
            publisher: {
              [Op.or]: [pub, sub],
            },
          },
          {
            subscriber: {
              [Op.or]: [pub, sub],
            },
          },
        ],
      },
    });
    return messages;
  };

  return Message;
};

export default message;
