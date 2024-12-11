const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <p className="leading-7 text-secondary">
          &rarr; git commit -m "Hello, World!"
          <span className="ml-2 text-xs text-chalk font-mono">/wave</span>
        </p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-white">
          I'm{" "}
          <a
            href="mailto:rvanrees@icloud.com"
            className="hover:underline font-serif"
          >
            Rutger
          </a>{" "}
          👋
        </h1>
        <p className="mt-4 text-lg leading-8 text-chalk mb-2">
          An enthusiast with a strong background in software development and
          data analytics, combining my love for technology with hands-on
          experience to drive innovative solutions and insights — trusted by
          leading brands.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <img
            alt="Google"
            src="/google.png"
            className="max-h-24 opacity-25 w-full object-contain sm:object-left hover:opacity-100 transition invert"
          />
          <img
            alt="Talpa"
            src="/talpa.png"
            className="max-h-24 opacity-25 w-full object-contain sm:object-left hover:opacity-100 transition invert"
          />
          <img
            alt="AVRO TROS"
            src="/avro.png"
            className="max-h-24 opacity-25 w-full object-contain sm:object-left hover:opacity-100 transition invert"
          />
          <img
            alt="Euro Vision"
            src="/eurovision.png"
            className="max-h-24 opacity-25 w-full object-contain sm:object-left hover:opacity-100 transition invert"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
