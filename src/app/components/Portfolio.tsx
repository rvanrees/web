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
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {pictures.map((p) => (
            <div key={p.id} className="group relative">
              <div className="relative">
                <img
                  alt={p.name}
                  src={p.imageSrc}
                  className="object-cover w-full rounded-lg bg-gray-100"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100"
                >
                  <div className="w-full rounded-md bg-white/50 px-4 py-2 text-center text-sm font-semibold text-charcoal backdrop-blur backdrop-filter">
                    Download
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between space-x-8 text-base font-medium text-white">
                <h3>
                  <a href={p.href} target="_blank">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {p.name}
                  </a>
                </h3>
              </div>
            </div>
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
