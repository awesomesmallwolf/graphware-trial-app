import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Output.module.css";

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

export default function Output() {
  const [data, setData] = useState<Data | null>(null);
  const router = useRouter();
  const { username } = router.query;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`/api/${username}`);
        const data = await res.json();
        setData(data);
      } catch {
        router.push("/404");
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <div className={styles.container}>
      <Head>
        <title>TikTok Metrics | Output</title>
        <meta name="description" content="Creable Coding Challenge - Full stack" />
      </Head>

      {data && (
        <main className={styles.main}>
          <div className={styles.header}>
            <span className={styles.sub_header}>Showing data for</span>
            <h2 className={styles.title}>tiktok.com/@{username}</h2>
            <div className={styles.user_info}>
              <img src={data.avatar} />
              <span>{data.displayName}</span>
            </div>
          </div>

          <div className={styles.data_container}>
            <ul className={styles.data}>
              <li>
                <h3>Total Followers</h3>
                <div>{data.totalFollowers.toLocaleString()}</div>
              </li>
              <li>
                <h3>Average Video Views</h3>
                <div>{data.averageVideoViews.toLocaleString()}</div>
              </li>
              <li>
                <h3>Interaction-rate</h3>
                <div>{Math.floor(data.interactionRate * 100)}%</div>
              </li>
              <li>
                <h3>Average Comments</h3>
                <div>{data.averageComments.toLocaleString()}</div>
              </li>
              <li>
                <h3>Average Likes</h3>
                <div>{data.averageLikes.toLocaleString()}</div>
              </li>
              <li>
                <h3>Average Shares</h3>
                <div>{data.averageShares.toLocaleString()}</div>
              </li>
            </ul>
          </div>
        </main>
      )}
    </div>
  );
}
