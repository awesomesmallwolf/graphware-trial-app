import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  function handleChangeUsername(event: ChangeEvent<HTMLInputElement>) {
    !loading && setUsername(event.target.value);
    !loading && error && setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    try {
      const res = await fetch(`/api/${username}`);
      const data = await res.json();
      if (data.username) {
        router.push(`/${data.username}`);
      }
    } catch (err) {
      setError("Account does not exist");
    }
    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>TikTok Metrics</title>
        <meta name="description" content="Creable Coding Challenge - Full stack" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>TikTok Metrics</h1>

        <p className={styles.description}>
          Find out how the Creator’s last 10 videos performed.
        </p>

        <form
          className={clsx(styles.form, { [styles.invalid]: error })}
          onSubmit={handleSubmit}
        >
          <div className={styles.form_group}>
            <div className={styles.input_group}>
              <div className={styles.prefix}>tiktok.com/@</div>
              <input
                className={styles.input}
                placeholder="username"
                value={username}
                onChange={handleChangeUsername}
              />
            </div>
            {error && <div className={styles.error}>{error}</div>}
          </div>

          <button
            className={styles.button}
            type="submit"
            disabled={!username || loading || !!error}
          >
            {loading ? "Fetching Data..." : "Show Performance"}
          </button>
        </form>
      </main>
    </div>
  );
}
