import User from './user';
import Post from './post';
import Tag from './tag';
import sequelize from "./sequelize";
import {Sequelize} from "sequelize";
export * from './sequelize';

const db = {
  sequelize,
  Sequelize,
  User,
  Post,
  Tag,
};

User.associate(db);
Post.associate(db);
Tag.associate(db);

export type dbType = typeof db;

export default db;