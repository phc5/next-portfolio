import Avatar from './avatar';
import PostTitle from './post-title';
import HitCounter from '../HitCounter/HitCounter';

export default function PostHeader({ title, date, author, slug }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex md:items-center md:justify-between mb-8">
        <Avatar name={author.name} picture={author.picture} date={date} />
        <HitCounter slug={slug} />
      </div>
      <div className="m-auto max-w-2xl">
        <div className="block mb-6 md:hidden">
          <Avatar name={author.name} picture={author.picture} date={date} />
        </div>
      </div>
    </>
  );
}
