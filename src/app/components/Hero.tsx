import { v4 as uuidv4 } from "uuid";

const greetings: Greeting[] = [
  { text: "Hello, world!", language: "EN" },
  { text: "Hallo, wereld!", language: "NL" },
  { text: "Hola, Mundo!", language: "ES" },
  { text: "Bonjour, le monde!", language: "FR" },
  { text: "Guten Tag, Welt!", language: "DE" },
  { text: "Ciao, Mondo!", language: "IT" },
];

const Hero = () => {
  const greeting: Greeting =
    greetings[Math.floor(Math.random() * greetings.length)];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <p className="leading-7 text-secondary">
          &rarr;{` git commit -m "${greeting.text}"`}
          <span className="ml-2 text-xs text-chalk">
            {uuidv4().slice(0, 8)} - {greeting.language}
          </span>
        </p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
          {greeting.text}
        </h2>
        <p className="mt-4 text-lg leading-8 text-chalk mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Hero;
