---
title: 'What is an ORM'
date: '2020-08-21'
snippet: 'ORM is any acronym for Objet Relational Mapping and allows you to write queries like SQL using an object-oriented paradigm of your preferred programming lanaguage.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'

---

ORM is any acronym for Objet Relational Mapping and allows you to write queries like SQL using an object-oriented paradigm of your preferred programming lanaguage. It allows you to turn something like this SQL statement:

`SELECT * FROM posts WHERE id = 1;`

into this:

```
const orm = await MikroORM.init(microConfig);
...
var posts = await orm.em().findOne(Post, {id: 1});
```

When I first used it, it seemed unnecessarily complex and felt like a suspect abstraction over a relational database.
However, after reading through articles and documentation online as well as writing more code, it definitely revealed its pros.

- For one, it eliminated repetitive code like mapping query fields to object properties and vice-versa. To learn more about this issue read this blog post by Martin Fowler: [OrmHate](https://martinfowler.com/bliki/OrmHate.html).
- Another benefit was the fact that I could query my database using JavaScript like above. ORMs support the object-oriented encapsulation of your business rules in your API layer using the programming language of your choice.
- Lastly, creating CRUD operations was a breeze in one of my projects. Reference them here: [Post Entity](https://github.com/phc5/reddit-clone/blob/master/server/src/entities/Post.ts) and [Post Resolver](https://github.com/phc5/reddit-clone/blob/master/server/src/resolvers/post.ts)

As I continue this [project](https://github.com/phc5/reddit-clone), I'll deifnitely learn more about why ORMs are used and exactly what problem it tries to solve.
