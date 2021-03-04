import markdownStyles from './markdown-styles.module.scss';

export default function PostBody({ content }) {
  return (
    <div>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
