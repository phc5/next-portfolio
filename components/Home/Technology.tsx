export default function () {
  return (
    <div className="grid gap-4">
      <h3 className="underline text-lg md:text-xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none text-left">
        Technology
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h4 className="mb-2 text-base md:text-lg lg:text-xl tracking-tighter leading-tight">
            Day-to-day
          </h4>
          <p className="text-xs md:text-sm lg:text-base tracking-tighter leading-tight">
            JavaScript, React, Next.js, GraphQL, CSS, AWS, .NET, and Node.js.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-base md:text-lg lg:text-xl tracking-tighter leading-tight">
            Learning and playing with
          </h4>
          <p className="text-xs md:text-sm lg:text-base tracking-tighter leading-tight">
            Typescript, Rx.js, Python, Flutter, Animations, and many more.
          </p>
        </div>
      </div>
    </div>
  );
}
