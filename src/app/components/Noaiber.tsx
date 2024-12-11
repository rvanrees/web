import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";

const Noaiber = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <p className="leading-7 text-secondary">
          &rarr; Kiek, 'n AI die plat kan proaten!
          <span className="ml-2 font-mono text-chalk text-xs">
            powered by{" "}
            <a href="https://openai.com" className="hover:underline">
              OpenAI
            </a>
          </span>
        </p>
        <div className="sm:flex mt-1 gap-x-4 items-center">
          <a
            href="https://chatgpt.com/g/g-675832d93a64819186f6c60a76ca52db-noaiber"
            target="_blank"
          >
            <img
              alt="NoAIber"
              src="/noaiber.png"
              className="w-64 opacity-25 hover:opacity-100 transition invert hidden sm:flex"
            />
          </a>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Exploring the{" "}
              <a
                href="https://chatgpt.com/g/g-675832d93a64819186f6c60a76ca52db-noaiber"
                target="_blank"
                className="hover:underline font-serif"
              >
                Noaber
              </a>{" "}
              in AI
            </h2>
            <p className="mt-2 text-sm font-normal text-chalk leading-6">
              A simple but unique example of what AI can truly become. No
              generic models, no ordinary boundaries—this is a creation that
              challenges conventions and reimagines possibilities.
            </p>
            <div className="flex justify-left">
              <div className="relative rounded-full px-3 py-1 text-sm transition ring-1 ring-chalk/50 hover:ring-white mt-2 group group-hover:text-white text-chalk">
                <a
                  href="https://chatgpt.com/g/g-675832d93a64819186f6c60a76ca52db-noaiber"
                  target="_blank"
                  className="font-semibold flex items-center text-secondary transition"
                >
                  <ChatBubbleLeftRightIcon className="w-5 mr-2 group-hover:text-white text-chalk transition" />
                  Give it a try!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noaiber;
