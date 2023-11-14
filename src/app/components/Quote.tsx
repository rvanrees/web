const Quote = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl px-6 py-24 lg:px-8">
      <figure>
        <blockquote className="text-center text-xl font-semibold leading-8 text-charcoal dark:text-white sm:text-2xl sm:leading-10">
          <p>
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita{" "}
            <span className="bg-secondary dark:bg-darcondary px-2 text-charcoal text-3xl">
              voluptas
            </span>{" "}
            culpa sapiente alias molestiae. Numquam corrupti in laborum sed
            rerum et corporis.”
          </p>
        </blockquote>
      </figure>
    </div>
  );
};

export default Quote;
