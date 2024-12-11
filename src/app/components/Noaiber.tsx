import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

const Noaiber = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <p className="leading-7 text-secondary">
          &rarr; Custom GPT
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
              <div className="relative rounded-full px-3 py-1 text-sm transition ring-1 ring-chalk/50 hover:ring-white mt-2">
                <a
                  href="https://chatgpt.com/g/g-675832d93a64819186f6c60a76ca52db-noaiber"
                  target="_blank"
                  className="font-semibold text-secondary transition"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  Give it a try <span aria-hidden="true">&rarr;</span>
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
