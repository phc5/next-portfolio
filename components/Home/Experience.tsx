export default function () {
  return (
    <div className="grid gap-2">
      <h3 className="text-lg underline font-bold">Experience</h3>
      <ul className="grid gap-3 m-0 p-0 sm:grid-cols-2">
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
      <h4>{company}</h4>
      <span>
        <p className="text-sm">{title}</p>
        <p className="text-xs">{time}</p>
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
