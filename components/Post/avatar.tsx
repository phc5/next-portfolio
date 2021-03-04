import Date from './date';

export default function Avatar({ name, picture, date }) {
  return (
    <div className="flex items-center ">
      <img className="rounded-full h-12 mr-4 w-12" src={picture} alt={name} />
      <div className="mr-3">
        <p className="text-xl font-bold">{name}</p>
        <Date dateString={date} />
      </div>
    </div>
  );
}
