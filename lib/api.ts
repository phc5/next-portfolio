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
    const { data } = matter(fileContents);

    const snippet =
      data.snippet.substr(
        0,
        Math.min(data.snippet.length, data.snippet.lastIndexOf(' '))
      ) + '...';

    postsWithData.push({
      path: `/blog/${directory.toLowerCase()}/${parse(file).name}`,
      title: data.title,
      date: data.date,
      snippet,
    });
  });

  return postsWithData.sort((a, b) => +new Date(b.date) - +new Date(a.date));
};

export const getPost = (
  slug,
  path,
  fields
): {
  title: string;
  date: string;
  slug: string;
  author: {};
  content: string;
} => {
  const directory = join(process.cwd(), path);
  const fullPath = join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const post: any = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      post[field] = slug;
    }
    if (field === 'content') {
      post[field] = content;
    }

    if (data[field]) {
      post[field] = data[field];
    }
  });

  return {
    title: post.title,
    date: post.date,
    slug: post.slug,
    author: post.author,
    content: post.content,
  };
};

export const getPostSlugs = (directory) => {
  const currentDirectory = join(process.cwd(), `_posts/${directory}`);

  const files = fs
    .readdirSync(currentDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => parse(dirent.name).name);

  return files;
};
