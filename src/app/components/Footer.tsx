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
            <a href="https://x.com/rutgervanrees" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="ml-2 fill-chalk hover:fill-secondary transition"
              >
                <path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,6v12	c0,1.657-1.343,3-3,3H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12C19.657,3,21,4.343,21,6z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"></path>
              </svg>
            </a>
          </div>
          <div>
            <a href="https://behance.net/rvanrees" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="ml-2 fill-chalk hover:fill-secondary transition"
              >
                <path d="M 5 3 C 3.898438 3 3 3.898438 3 5 L 3 19 C 3 20.101563 3.898438 21 5 21 L 19 21 C 20.101563 21 21 20.101563 21 19 L 21 5 C 21 3.898438 20.101563 3 19 3 Z M 6.40625 7.6875 L 9 7.6875 C 11.300781 7.6875 11.6875 9.101563 11.6875 10 C 11.6875 11.300781 10.792969 11.710938 10.59375 11.8125 C 10.792969 11.914063 11.8125 12.1875 11.8125 13.6875 C 11.914063 15.488281 10.789063 16.1875 9.1875 16.1875 L 6.40625 16.1875 Z M 13.40625 7.6875 L 17.09375 7.6875 L 17.09375 8.6875 L 13.40625 8.6875 Z M 8.09375 9.09375 L 8.09375 11.1875 L 9 11.1875 C 9.601563 11.1875 10 10.988281 10 10.1875 C 10 9.488281 9.699219 9.09375 9 9.09375 Z M 15.59375 9.8125 C 16.992188 9.8125 18 10.605469 18 12.90625 L 18 13.59375 L 14.59375 13.59375 C 14.59375 13.894531 14.613281 15 15.8125 15 C 16.613281 15 16.988281 14.605469 17.1875 14.40625 L 17.90625 15.40625 C 17.804688 15.507813 17.113281 16.3125 15.8125 16.3125 C 14.3125 16.3125 13.09375 15.507813 13.09375 13.40625 L 13.09375 12.90625 C 13.09375 10.605469 14.292969 9.8125 15.59375 9.8125 Z M 15.40625 11.09375 C 15.105469 11.09375 14.5 11.207031 14.5 12.40625 L 16.1875 12.40625 C 16.1875 12.40625 16.40625 11.09375 15.40625 11.09375 Z M 8.09375 12.5 L 8.09375 14.8125 L 9.1875 14.8125 C 9.789063 14.8125 10.09375 14.386719 10.09375 13.6875 C 10.195313 12.886719 9.914063 12.5 9.3125 12.5 Z"></path>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
