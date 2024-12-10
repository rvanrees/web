"use client";

import { useEffect, useState } from "react";
import { Photo } from "../types/Model";

const COLUMNS: string = "2";

const Portfolio = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setLoading] = useState(true);

  // For loading state
  const placeholder: number[] = [1, 2, 3];

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`/api/pexels?collectionId=wpdern7`);
      if (!response.ok) {
        setLoading(false);
        throw new Error("Fout bij het ophalen van foto's");
      }

      const data = await response.json();
      setPhotos(data.media || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Fout bij het ophalen van de foto's:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <p className="leading-7 text-secondary">
          &rarr; Showcase
          <span className="ml-2 font-mono text-chalk text-xs">
            SELECT * FROM pictures;
          </span>
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          I've started exploring the world of photography
        </h2>
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3 mt-6">
          {isLoading ? (
            placeholder.map((p: number) => (
              <article
                key={p}
                className="flex max-w-xl flex-col items-start animate-pulse"
              >
                <p className="text-sm font-normal rounded-lg leading-6 bg-slate-700 h-48 w-full"></p>
              </article>
            ))
          ) : (
            <>
              {photos.map((p) => (
                <figure
                  key={p.id}
                  className="relative transition-all duration-300 cursor-pointer animate-fadeIn"
                >
                  <a href={p.url} target="_blank">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-lg hover:opacity-75 transition"
                    />
                    <img
                      className="rounded-lg"
                      src={p.src.medium}
                      alt={p.alt}
                    />
                  </a>
                  <figcaption className="absolute px-3 text-md font-semibold text-white bottom-2">
                    <p>{p.alt}</p>
                  </figcaption>
                </figure>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
