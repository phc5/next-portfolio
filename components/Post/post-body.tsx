import markdownStyles from './markdown-styles.module.scss';

export default function PostBody({ content }) {
  return (
    <div
      className={`${markdownStyles['markdown']} mb-40`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
