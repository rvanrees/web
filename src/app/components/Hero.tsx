"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Hero = () => {
  const [tag, setTag] = useState<string>("");

  useEffect(() => {
    setTag(uuidv4().slice(0, 6));
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <p className="leading-7 text-secondary">
          &rarr; git commit -m "Hello, world!"
          <span className="ml-2 text-xs text-chalk font-mono">{tag}</span>
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
        <p className="mt-4 text-lg leading-8 text-chalk mb-4">
          An enthusiast with a strong background in software development and
          data analytics, combining my love for technology with hands-on
          experience to drive innovative solutions and insights.
        </p>
      </div>
    </div>
  );
};

export default Hero;
