import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  skills: Skill[];
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    skills: [
      {
        id: 1,
        title: "Lorem ipsum",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        ],
        icon: null,
      },
      {
        id: 2,
        title: "Dolor sit amet",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        icon: null,
      },
      {
        id: 3,
        title: "Consectetur asipiscing",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        icon: null,
      },
    ],
  });
}
