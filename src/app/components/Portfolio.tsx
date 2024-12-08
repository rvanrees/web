const Portfolio = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square hidden sm:flex">
          <img
            alt="Hello, world! I'm Rutger 👋"
            src="/004.jpg"
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
                  href="https://www.pexels.com/@rutger-van-rees-2147548108/"
                  target="_blank"
                >
                  <span className="absolute inset-0" />
                  Hello, world! I'm Rutger 👋
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto">
          <img
            alt="Aerial View of Busy New York City Intersection"
            src="https://images.pexels.com/photos/29650207/pexels-photo-29650207/free-photo-of-aerial-view-of-busy-new-york-city-intersection.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
        <div className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto">
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
      </div>
    </div>
  );
};

export default Portfolio;
