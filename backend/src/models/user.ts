import {
  Model,
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyGetAssociationsMixin
} from 'sequelize';
import Post from './post';
import sequelize from "./sequelize";
import {dbType} from "./index";

class User extends Model {
  public readonly id!: number;
  public nickname!: string;
  public password!: string;
  public email!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;

  public getPosts!: HasManyGetAssociationsMixin<Post>;
  public addPost!: HasManyAddAssociationMixin<Post, number>;

  public static associate = (db: dbType): void => {
    db.User.hasMany(Post, {
      sourceKey: 'id',
    });
  }

}

User.init({
  id: {
    field: 'id',
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nickname: {
    field: 'nickname',
    type: DataTypes.STRING(15),
    unique: true,
    allowNull: false,
  },
  password: {
    field: 'password',
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    field: 'email',
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
}, {
  underscored: true,
  tableName: 'blog_users',
  modelName: 'User',
  paranoid: true,
  timestamps: true,
  charset: 'utf8',
  sequelize,
});



export default User;