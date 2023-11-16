const Quote = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl px-6 py-24 lg:px-8">
      <figure>
        <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-10 text-white font-serif">
          “From phones to cars to medicine, technology touches every part of our
          lives. If you can create technology, you can{" "}
          <span className="bg-secondary px-2 pb-1 text-charcoal text-2xl sm:text-3xl hover:bg-white cursor-crosshair transition">
            change
          </span>{" "}
          the world.”
          <a
            href="https://en.wikipedia.org/wiki/Susan_Wojcicki"
            target="_blank"
            className="mt-1 font-mono text-xs text-chalk font-normal hover:text-secondary transition"
          >
            Susan Wojcicki
          </a>
        </blockquote>
      </figure>
    </div>
  );
};

export default Quote;
