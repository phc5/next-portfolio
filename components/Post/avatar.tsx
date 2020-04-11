import Date from './date';

export default function Avatar({ name, picture, date }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="mr-3">
        <div className="text-xl font-bold">{name}</div>
        <Date dateString={date} />
      </div>
    </div>
  );
}
