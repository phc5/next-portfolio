import Header from './Header/Header';

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="min-h-screen relative bg-dark-bg text-dark-mode-text">
      <div className="grid gap-8 px-8 pb-8 sm:mx-auto sm:pr-0 max-w-5xl">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
