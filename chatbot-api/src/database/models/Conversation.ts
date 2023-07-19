import { DataTypes, Model } from 'sequelize';
import db from '.';

class Conversation extends Model {
  id!: number;
  user!: string;
  body!: JSON;
  finished!: Date;
  created_at!: Date;
}

Conversation.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    corpo: {
      allowNull: false,
      type: DataTypes.JSON,
    },
    finished: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  {
    modelName: 'conversations',
    underscored: true,
    timestamps: false,
    sequelize: db,
  }
);

export default Conversation;
