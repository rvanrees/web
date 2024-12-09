"use client";

import { useEffect, useState } from "react";

interface Photo {
  id: number;
  url: string;
  src: {
    medium: string;
  };
  alt: string;
}

const Portfolio = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`/api/pexels?collectionId=wpdern7`);
      if (!response.ok) {
        throw new Error("Fout bij het ophalen van foto's");
      }

      const data = await response.json();
      setPhotos(data.media || []);
    } catch (error) {
      console.error("Fout bij het ophalen van de foto's:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          {photos.map((p) => (
            <figure
              key={p.id}
              className="relative transition-all duration-300 cursor-pointer hover:opacity-75"
            >
              <a href={p.url} target="_blank">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-lg"
                />
                <img className="rounded-lg" src={p.src.medium} alt={p.alt} />
              </a>
              <figcaption className="absolute px-3 text-md font-semibold text-white bottom-2">
                <p>{p.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;