export default function () {
  return (
    <div className="grid gap-4">
      <h3 className="underline text-lg md:text-xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none text-left">
        Experience
      </h3>
      <ul className="grid gap-4 m-0 p-0 sm:grid-cols-2">
        {experienceData.map((data) => (
          <ExperienceBlock
            company={data.company}
            title={data.title}
            time={data.time}
            key={data.company}
          />
        ))}
      </ul>
    </div>
  );
}

function ExperienceBlock({ company, title, time }) {
  return (
    <li className="list-none">
      <h4 className="text-base md:text-lg lg:text-xl tracking-tighter leading-tight">
        {company}
      </h4>
      <span>
        <p className="text-sm md:text-base lg:text-lg tracking-tighter leading-tight">
          {title}
        </p>
        <p className="text-xs md:text-sm tracking-tighter leading-tight">
          {time}
        </p>
      </span>
    </li>
  );
}
/** Data **/
const experienceData = [
  {
    company: 'Cox Automotive (Kelley Blue Book)',
    title: 'UI Engineer',
    time: '2017 - present',
  },
  {
    company: 'California Christ Community Church',
    title: 'Webmaster',
    time: '2019 - present',
  },
  {
    company: 'SalesPad',
    title: 'Junior C# Developer',
    time: '2015',
  },
  {
    company: 'Calvin College',
    title: 'B.S. Computer Science',
    time: '2013 - 2016',
  },
];
