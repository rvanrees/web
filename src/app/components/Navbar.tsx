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
            src="/me.jpg"
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
            className="text-xs leading-6 text-chalk font-mono hover:text-secondary transition"
          >
            rvanrees/web
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
