"use client";

import { useEffect, useState } from "react";
import {
  ArrowsRightLeftIcon,
  ChartBarIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

// For loading state
const placeholder = [...Array(3)];

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  // Added interval for the placeholder
  useEffect(() => {
    setInterval(() => {
      setSkills([
        {
          id: 1,
          title: "Lorem ipsum",
          content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          ],
          icon: (
            <ArrowsRightLeftIcon
              className="h-6 w-6 text-secondary mr-2 mt-2"
              aria-hidden="true"
            />
          ),
        },
        {
          id: 2,
          title: "Dolor sit amet",
          content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ],
          icon: (
            <LanguageIcon
              className="h-6 w-6 text-secondary mr-2 mt-2"
              aria-hidden="true"
            />
          ),
        },
        {
          id: 3,
          title: "Consectetur asipiscing",
          content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
          icon: (
            <ChartBarIcon
              className="h-6 w-6 text-secondary mr-2 mt-2"
              aria-hidden="true"
            />
          ),
        },
      ]);
    }, 500);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <p className="leading-7 text-secondary">
          &rarr; git pull origin skills
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Lorem ipsum dolor sit amet
        </h2>
        <div className="mt-4 mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 pt-4">
          {skills.length === 0
            ? placeholder.map((_p: any, i: number) => (
                <article
                  key={i}
                  className="flex max-w-xl flex-col items-start animate-pulse"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time className="font-normal text-gray-500 dark:text-slate-400 rounded bg-slate-300 dark:bg-slate-700 h-3 w-16"></time>
                  </div>
                  <div className="group relative">
                    <div className="flex flex-row">
                      <h3 className="mt-2 text-lg font-semibold leading-6 text-sky-950 dark:text-slate-100 rounded bg-slate-300 dark:bg-slate-700 h-6 w-32"></h3>
                    </div>
                    <p className="mt-2 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400 rounded bg-slate-300 dark:bg-slate-700 h-4 w-64"></p>
                    <p className="mt-2 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400 rounded bg-slate-300 dark:bg-slate-700 h-4 w-48"></p>
                    <p className="mt-2 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400 rounded bg-slate-300 dark:bg-slate-700 h-4 w-52"></p>
                    <p className="mt-2 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400 rounded bg-slate-300 dark:bg-slate-700 h-4 w-36"></p>
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
                      {s.icon}
                      <h3 className="mt-2 text-lg font-semibold leading-6 text-white">
                        {s.title}
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
