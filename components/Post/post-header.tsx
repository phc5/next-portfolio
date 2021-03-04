import Avatar from './avatar';
import PostTitle from './post-title';

export default function PostHeader({ title, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} date={date} />
      </div>
      <div className="m-auto max-w-2xl">
        <div className="block mb-6 md:hidden">
          <Avatar name={author.name} picture={author.picture} date={date} />
        </div>
      </div>
    </>
  );
}
