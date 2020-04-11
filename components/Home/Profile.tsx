function Profile() {
  return (
    <div className="my-8 flex items-center flex-col md:flex-row justify-evenly md:justify-start">
      <img
        width="128"
        height="128"
        src="/profilepic.jpg"
        alt="Paul Chong Profile Pic"
        className="md:mr-8 md:self-end"
      />
      <div>
        <h1 className="m-0 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none text-left">
          Paul Chong
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none text-left">
          Software Engineer
        </h2>
      </div>
    </div>
  );
}

export default Profile;
