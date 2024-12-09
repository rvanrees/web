"use client";

import { useState } from "react";

const Commits = () => {
  const [since, setSince] = useState("");
  const [until, setUntil] = useState("");
  const [commits, setCommits] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCommits = async () => {
    if (!since || !until) {
      alert("Please provide both 'since' and 'until' dates.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `/api/commits?since=${since}&until=${until}`
      );
      if (!response.ok) throw new Error("Error fetching data");

      const data = await response.json();
      setCommits(data);
    } catch (error) {
      console.error("Failed to fetch commits:", error);
    }

    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <p className="leading-7 text-secondary">
          &rarr; git commit -m
          <span className="ml-2 font-mono text-chalk text-xs">
            {`"Hello, world!"`}
          </span>
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Activities on this repository
        </h2>
      </div>
    </div>
  );
};

export default Commits;
