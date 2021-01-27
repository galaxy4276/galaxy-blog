import {Model, DataTypes, HasManyGetAssociationsMixin, HasManyAddAssociationMixin} from 'sequelize';
import {dbType} from "./index";
import Post from './post';
import sequelize from './sequelize';

class Tag extends Model {
  public readonly id!: number;
  public name!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;

  public getPosts!: HasManyGetAssociationsMixin<Post>;
  public addPost!: HasManyAddAssociationMixin<Post, number>;

  public static associate = (db: dbType) => {
    db.Tag.belongsToMany(db.Post, {
      through: 'post_tags',
      targetKey: 'id',
      sourceKey: 'id',
      timestamps: true,
    });
  };
}

Tag.init({
  id: {
    field: 'id',
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    field: 'name',
    type: DataTypes.STRING(30),
    allowNull: false,
  },
}, {
  underscored: true,
  tableName: 'blog_tags',
  modelName: 'Tag',
  paranoid: true,
  timestamps: true,
  sequelize,
})

export default Tag;