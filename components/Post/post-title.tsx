export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl font-bold tracking-tighter leading-tight mb-12 text-center md:text-7xl md:leading-none md:text-left lg:text-8xl">
      {children}
    </h1>
  );
}
