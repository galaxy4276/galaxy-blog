import {Model, DataTypes, HasManyGetAssociationsMixin} from 'sequelize';
import User from './user';
import Tag from './tag';
import sequelize from "./sequelize";
import {dbType} from "./index";

class Post extends Model {
  public readonly id!: number;
  public title!: string;
  public body!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;

  public getUsers!: HasManyGetAssociationsMixin<User>;

  public static associate = (db: dbType): void => {
    db.Post.belongsTo(User, {
      targetKey: 'id',
      foreignKey: 'user_id',
    });
    db.Post.belongsToMany(Tag, {
      through: 'post_tags',
      targetKey: 'id',
      sourceKey: 'id',
      timestamps: true,
    });
  }
}

Post.init({
  id: {
    field: 'id',
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    field: 'title',
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  body: {
    field: 'body',
    type: DataTypes.STRING(400),
    allowNull: false,
  },
}, {
  underscored: true,
  paranoid: true,
  timestamps: true,
  modelName: 'Post',
  tableName: 'blog_posts',
  charset: 'utf8mb4',
  collate: 'utf8mb4_general_ci',
  sequelize,
});


export default Post;