# A bare-bones TikTok metrics generator that allows anyone to see a TikTok user’s performance metrics.

This was bootstrapped with Next, TypeScript, Tailwind CSS and Figma Design file.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [the live site](https://metric-generator.vercel.app/) of this repository for more details.

## Future issues to be addressed in the data collection part

We can use `tiktok-app-api` package to collect data from TikTok. And some data like `Average Video Views`, `Average Comments`, `Interaction-rate` and `Average Shares` from a TikTok user’s performance metrics can be obtained from various functions in `tiktok-app-api`.

```JavaScript
import tiktok from "tiktok-app-api";

  const tiktokApp = await tiktok()
  const user = await tiktokApp.getUserByName(username);
  const userInfo = await tiktokApp.getUserInfo(user);
  const {
    avatar,
    nickname: displayName,
    followerCount: totalFollowers,
    likeCount,
    videoCount,
  } = userInfo;

  res
    .status(200)
    .json({
      username,
      avatar,
      displayName,
      totalFollowers,
      averageVideoViews: 20083,
      interactionRate: 0.24,
      averageComments: 5211,
      averageLikes: Math.floor(likeCount / videoCount),
      averageShares: 5000,
    });
```
