"use client";

import { useEffect, useState } from "react";

// For loading state
const placeholder = [...Array(3)];

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      fetch("/api/skills")
        .then((res) => res.json())
        .then((data) => {
          setSkills(data.skills);
          setLoading(false);
        });
    }, 1200);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {isLoading ? (
          <p className="leading-7 text-secondary">
            &rarr; GET{" "}
            <a href="/api/skills" className="hover:underline transition">
              /api/skills
            </a>
            <span className="ml-2 text-xs text-chalk animate-pulse">
              fetching...
            </span>
          </p>
        ) : (
          <p className="leading-7 text-secondary">
            &rarr; GET{" "}
            <a href="/api/skills" className="hover:underline transition">
              /api/skills
            </a>
            <span className="ml-2 text-xs text-chalk">1.2ms</span>
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Lorem ipsum dolor sit amet
        </h2>
        <div className="mt-2 mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 pt-4">
          {isLoading
            ? placeholder.map((_p: any, i: number) => (
                <article
                  key={i}
                  className="flex max-w-xl flex-col items-start animate-pulse"
                >
                  <div className="group relative">
                    <div className="flex flex-row">
                      <h3 className="mt-2 text-lg font-semibold leading-6 rounded bg-slate-700 h-6 w-32"></h3>
                    </div>
                    <p className="mt-2 text-sm font-normal rounded leading-6 bg-slate-700 h-4 w-64"></p>
                    <p className="mt-2 text-sm font-normal rounded leading-6 bg-slate-700 h-4 w-48"></p>
                    <p className="mt-2 text-sm font-normal rounded leading-6 bg-slate-700 h-4 w-52"></p>
                    <p className="mt-2 text-sm font-normal rounded leading-6 bg-slate-700 h-4 w-36"></p>
                    <p className="mt-2 text-sm font-normal rounded leading-6 bg-slate-700 h-4 w-48"></p>
                  </div>
                </article>
              ))
            : skills.map((s: Skill) => (
                <article
                  key={s.id}
                  className="flex max-w-xl flex-col items-start"
                >
                  <div className="group relative">
                    <div className="flex flex-row">
                      <h3 className="mt-2 text-lg font-semibold leading-6 text-white">
                        {s.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 -mt-0.5 ml-1 text-secondary inline"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </h3>
                    </div>
                    {s.content.map((p: string) => (
                      <p className="mt-2 text-sm font-normal leading-6 text-chalk">
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
