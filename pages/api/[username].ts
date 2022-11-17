// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import tiktok from "tiktok-app-api";

type Data = {
  username: string;
  displayName: string;
  totalFollowers: number;
  averageVideoViews: number;
  averageComments: number;
  averageLikes: number;
  averageShares: number;
  interactionRate: number;
  avatar: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const username = req.query.username as string;

  // const tiktokApp = await tiktok()
  // const user = await tiktokApp.getUserByName(username);
  // const userInfo = await tiktokApp.getUserInfo(user);
  // const {
  //   avatar,
  //   nickname: displayName,
  //   followerCount: totalFollowers,
  //   likeCount,
  //   videoCount,
  // } = userInfo;

  // res
  //   .status(200)
  //   .json({
  //     username,
  //     avatar,
  //     displayName,
  //     totalFollowers,
  //     averageVideoViews: 20083,
  //     interactionRate: 0.24,
  //     averageComments: 5211,
  //     averageLikes: Math.floor(likeCount / videoCount),
  //     averageShares: 5000,
  //   });

  res.status(200).json({
    username,
    avatar: "https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f9ea.svg",
    displayName: "Display name",
    totalFollowers: 31200,
    averageVideoViews: 20083,
    interactionRate: 0.24,
    averageComments: 5211,
    averageLikes: 10123,
    averageShares: 5000,
  });
}
