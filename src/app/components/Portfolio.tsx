const pictures = [
  {
    id: 1,
    name: "Aerial View of Busy New York City Intersection",
    href: "https://www.pexels.com/photo/aerial-view-of-busy-new-york-city-intersection-29650207/",
    imageSrc:
      "https://images.pexels.com/photos/29650207/pexels-photo-29650207/free-photo-of-aerial-view-of-busy-new-york-city-intersection.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Bustling New York City Crosswalk in Morning Light",
    href: "https://www.pexels.com/photo/bustling-new-york-city-crosswalk-in-morning-light-29650206/",
    imageSrc:
      "https://images.pexels.com/photos/29650206/pexels-photo-29650206/free-photo-of-bustling-new-york-city-crosswalk-in-morning-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Portfolio = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          {pictures.map((p) => (
            <figure
              key={p.id}
              className="relative transition-all duration-300 cursor-pointer hover:opacity-75"
            >
              <a href={p.href} target="_blank">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-lg"
                />
                <img className="rounded-lg" src={p.imageSrc} alt={p.name} />
              </a>
              <figcaption className="absolute px-3 text-md font-semibold text-white bottom-2">
                <p>{p.name}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

{
  /* <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8">
        <div className="">
          <img
            alt="Aerial View of Busy New York City Intersection"
            src="https://images.pexels.com/photos/29650207/pexels-photo-29650207/free-photo-of-aerial-view-of-busy-new-york-city-intersection.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="absolute object-cover group-hover:opacity-75 transition"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
          />
          <div className="absolute inset-0 flex items-end pl-6 pb-4">
            <div>
              <h3 className="font-semibold text-white">
                <a
                  href="https://www.pexels.com/photo/aerial-view-of-busy-new-york-city-intersection-29650207/"
                  target="_blank"
                >
                  <span className="absolute inset-0" />
                  Aerial View of Busy New York City Intersection
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="">
          <img
            alt="Bustling New York City Crosswalk in Morning Light"
            src="https://images.pexels.com/photos/29650206/pexels-photo-29650206/free-photo-of-bustling-new-york-city-crosswalk-in-morning-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="absolute size-full object-cover group-hover:opacity-75 transition"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
          />
          <div className="absolute inset-0 flex items-end pl-6 pb-4">
            <div>
              <h3 className="font-semibold text-white">
                <a
                  href="https://www.pexels.com/photo/bustling-new-york-city-crosswalk-in-morning-light-29650206/"
                  target="_blank"
                >
                  <span className="absolute inset-0" />
                  Bustling New York City Crosswalk in Morning Light
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div> */
}
