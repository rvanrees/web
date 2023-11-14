import packageJson from "../../../package.json";

const Navbar = () => {
  return (
    <nav className="border-b border-white/10 mb-0 sm:mb-4">
      <div className="max-w-2xl lg:max-w-4xl flex flex-row justify-between mx-auto py-4 lg:px-0 md:px-0 px-4">
        <a
          href="/"
          className="text-xl font-normal leading-9 tracking-tight text-secondary flex flex-row"
        >
          <img
            className="mx-auto h-10 w-10 rounded-full"
            src="https://media.licdn.com/dms/image/D4D03AQG3-dLeWIEHtA/profile-displayphoto-shrink_400_400/0/1694679073383?e=1704931200&v=beta&t=4vfcphJK6WvGpffJN3y13Yuwfylk25T6Ya-gTm8IJAM"
            alt="Rutger van Rees"
          />
        </a>
        <div className="mt-2 px-2 flex flex-row">
          <span className="relative flex h-2 w-2 mt-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <a
            href="https://github.com/rvanrees/web"
            target="_blank"
            className="text-xs font-semibold leading-6 text-chalk hover:text-secondary transition"
          >
            rvanrees/web v{packageJson.version}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
