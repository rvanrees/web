import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  experience: Experience[];
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    experience: [
      {
        id: 1,
        title: "Software Development",
        value: 83,
        level: "w-10/12",
        content:
          "Software development is the process of designing, creating, testing, and maintaining different software applications. It involves the application of various principles and techniques from computer science, engineering and mathematical analysis.",
      },
      {
        id: 2,
        title: "Data Analytics",
        value: 66,
        level: "w-8/12",
        content:
          "Data analytics is the collection, transformation, and organization of data in order to draw conclusions, make predictions, and drive informed decision making. Data analytics is often confused with data analysis. While these are related terms, they aren't exactly the same.",
      },
      {
        id: 3,
        title: "Artificial Intelligence",
        value: 33,
        level: "w-4/12",
        content:
          "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
      },
    ],
  });
}
