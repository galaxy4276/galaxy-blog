import User from "../models/user";
import Post from "../models/post";
import * as faker from 'faker';
import db from "../models";
import Tag from '../models/tag';

const createBulkUserData = async () => {
  for (let i = 0; i <= 250; i++) {
    await User.create({
      nickname: faker.name.lastName() + i,
      email: `galaxy${i + 1}@gmail.com`,
      password: 'paragraphs',
    });
  }
};

const createBulkPostData = async () => {
  for (let i = 0; i <= 250; i++) {
    const [user, post] = await Promise.all(
      [
        User.findOne({where: {id: 1}}),
        Post.create({
          title: faker.name.title(),
          body: faker.lorem.sentence(),
        }),
      ]);

    await user!.addPost(post);
  }
};

const createBulkTagData = async () => {
  const post = await Post.findOne({ where: { id: 1}});
  for (let i = 0; i <= 30; i++) {
    const tag = await Tag.create({
      name: faker.git.branch(),
    });

    await tag.addPost(post!);
  }
}

async function asyncDB() {
  await db.sequelize.sync({ force: true });
  await createBulkUserData();
  await createBulkPostData();
  await createBulkTagData();
}

export default asyncDB;
