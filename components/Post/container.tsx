export default function Container({ children }) {
  return (
    <div className=" mr-2 ml-2 mt-2 mb-8 sm:py-5 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      {children}
    </div>
  );
}
