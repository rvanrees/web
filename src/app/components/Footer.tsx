import packageJson from "../../../package.json";

const Footer = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl px-4 sm:px-6 lg:px-8 pb-4">
      <div className="flex flex-row justify-between border-t border-white/10 py-2">
        <div className="mt-1.5">
          <p className="text-xs text-chalk">
            <a
              href="https://rutgervanrees.nl"
              className="font-bold text-white hover:text-secondary transition mr-2"
            >
              Rutgervanrees.nl
            </a>
            <span className="font-mono">v{packageJson.version}</span>
          </p>
        </div>
        <div className="hidden lg:block p-x-4"></div>
        <div className="flex flex-row mt-0.5">
          <div>
            <a
              href="https://www.linkedin.com/in/rutgervanrees/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-chalk hover:fill-secondary transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                </svg>
              </svg>
            </a>
          </div>
          <div>
            <a href="https://github.com/rvanrees" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="ml-2 fill-chalk hover:fill-secondary transition"
              >
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
            </a>
          </div>
          <div>
            <a
              href="https://www.pexels.com/@rutger-van-rees-2147548108/"
              target="_blank"
            >
              <svg
                fill="#000000"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 mt-0.5 fill-chalk hover:fill-secondary transition"
              >
                <path d="M13.188 11.314v9.372h3.622v-3.517h1.091c0.014 0 0.031 0 0.048 0 1.617 0 2.928-1.311 2.928-2.928s-1.311-2.928-2.928-2.928c-0.017 0-0.034 0-0.051 0l0.003-0zM11.314 9.439h6.587c0.001 0 0.001 0 0.002 0 2.652 0 4.802 2.15 4.802 4.802 0 2.376-1.726 4.349-3.993 4.734l-0.028 0.004v3.58h-7.371zM2.879 1.004c-1.035 0-1.874 0.839-1.874 1.874v0 26.242c0 1.035 0.839 1.874 1.874 1.874h26.242c1.035 0 1.874-0.839 1.874-1.874v0-26.242c0-1.035-0.839-1.874-1.874-1.874v0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
