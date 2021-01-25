import {Model, DataTypes} from 'sequelize';
import sequelize from "./sequelize";

class User extends Model {
  public readonly id!: number;
  public nickname!: string;
  public password!: string;
  public email!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nickname: {
    type: DataTypes.STRING(15),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'users',
  modelName: 'User',
  paranoid: true,
  timestamps: true,
  charset: 'utf8',
  sequelize,
});

export const associate = () => {};
export default User;