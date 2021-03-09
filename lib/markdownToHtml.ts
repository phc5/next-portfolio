import remark from 'remark';
import html from 'remark-html';
import externalLinks from 'remark-external-links';
import toc from 'remark-toc';
import slug from 'remark-slug';
import headings from 'remark-autolink-headings';
import merge from 'deepmerge';
import github from 'hast-util-sanitize/lib/github.json';

const schema = merge(github, {
  attributes: { '*': ['className'] },
  clobberPrefix: '',
});

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(slug)
    .use(headings)
    .use(toc, { maxDepth: 3, tight: true })
    .use(externalLinks, {
      target: '_blank',
      rel: ['nofollow', 'noopener', 'noreferrer'],
    })
    .use(html, { sanitize: schema })
    .process(markdown);
  return result.toString();
}
