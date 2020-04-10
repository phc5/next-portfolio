import fs from 'fs';
import { join, parse } from 'path';
import matter from 'gray-matter';

export const getDirectories = () =>
  fs
    .readdirSync('_posts', { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

export const getMapOfFiles = () => {
  const directories = getDirectories();
  const mapOfFiles = {};

  directories.forEach((directory) => {
    const postsWithData = getPostsFromDirectory(directory);
    mapOfFiles[directory] = postsWithData;
  });

  return mapOfFiles;
};

export const getPostsFromDirectory = (directory) => {
  const currentDirectory = join(process.cwd(), `_posts/${directory}`);
  const postsWithData = [];

  const files = fs
    .readdirSync(join('_posts', directory), { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

  files.forEach((file) => {
    const fullPath = join(currentDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    postsWithData.push({
      path: `/blog/${directory.toLowerCase()}/${parse(file).name}`,
      title: data.title,
      date: data.date,
      snippet: data.snippet,
    });
  });

  return postsWithData;
};

export const getPost = (slug, path, fields) => {
  const directory = join(process.cwd(), path);
  const fullPath = join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

export const getPostSlugs = (directory) => {
  const currentDirectory = join(process.cwd(), `_posts/${directory}`);

  const files = fs
    .readdirSync(currentDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => parse(dirent.name).name);

  return files;
};
