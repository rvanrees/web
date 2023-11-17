"use client";

import { useEffect, useState } from "react";

// For loading state
const placeholder: number[] = [1, 2, 3];
const lag: number = 1200;

const Experience = () => {
  const [experience, setExpierence] = useState<Experience[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("/api/experience")
        .then((res) => res.json())
        .then((data) => {
          setExpierence(data.experience);
          setLoading(false);
        });
    }, lag);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {isLoading ? (
          <p className="leading-7 text-secondary">
            &rarr; GET{" "}
            <a href="/api/experiences" className="hover:underline transition">
              /api/experience
            </a>
            <span className="ml-2 text-xs text-chalk animate-pulse font-mono">
              fetching&hellip;
            </span>
          </p>
        ) : (
          <p className="leading-7 text-secondary">
            &rarr; GET{" "}
            <a href="/api/experiences" className="hover:underline transition">
              /api/experience
            </a>
            <span className="ml-2 text-xs text-chalk font-mono">{`${
              lag / 1000
            }ms`}</span>
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-white">
          {isLoading ? (
            <div className="my-2 text-lg font-semibold leading-6 rounded bg-slate-700 h-8 w-64 animate-pulse"></div>
          ) : (
            "This is within my area of expertise"
          )}
        </h2>
        <div className="mt-2 mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 pt-4">
          {isLoading
            ? placeholder.map((p: number) => (
                <article
                  key={p}
                  className="flex max-w-xl flex-col items-start animate-pulse"
                >
                  <div className="group relative">
                    <div className="flex flex-row">
                      <p className="mt-4 text-lg font-semibold leading-6 rounded bg-slate-700 h-8 w-48"></p>
                    </div>
                    <p className="mt-2 text-sm font-normal rounded leading-6 bg-slate-700 h-4 w-64"></p>
                    <p className="mt-2 text-sm font-normal rounded leading-6 bg-slate-700 h-4 w-48"></p>
                    <p className="mt-2 text-sm font-normal rounded leading-6 bg-slate-700 h-4 w-52"></p>
                    <p className="mt-2 text-sm font-normal rounded leading-6 bg-slate-700 h-4 w-36"></p>
                    <p className="mt-2 text-sm font-normal rounded leading-6 bg-slate-700 h-4 w-48"></p>
                  </div>
                </article>
              ))
            : experience.map((e: Experience) => (
                <article
                  key={e.id}
                  className="flex max-w-xl flex-col items-start"
                >
                  <h3 className="mt-0 text-lg font-semibold leading-6 text-white">
                    {e.title}
                  </h3>
                  <div className="flex flex-row w-full">
                    <div className="mt-2 w-6/12 bg-slate-700 rounded-full h-2.5 mb-2">
                      <div
                        className={`bg-secondary h-2.5 rounded-full ${e.level}`}
                      ></div>
                    </div>
                    <p className="ml-2 text-xs text-chalk font-mono mt-1.5">
                      {e.value}% XP
                    </p>
                  </div>
                  <p
                    className="mt-2 text-sm font-normal text-chalk leading-6 first-letter:text-5xl first-letter:font-bold first-letter:text-white
                      first-letter:mr-2  first-letter:float-left first-letter:font-serif"
                  >
                    {e.content}
                  </p>
                </article>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
