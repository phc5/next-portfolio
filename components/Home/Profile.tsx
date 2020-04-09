function Profile() {
  return (
    <div className="flex flex-col justify-evenly h-banner">
      <img width="128" height="128" src="/profilepic.jpg" />
      <div>
        <h1 className="m-0 text-4xl">Paul Chong</h1>
        <h2 className="m-0 text-xl">Software Engineer</h2>
      </div>
    </div>
  );
}

export default Profile;
