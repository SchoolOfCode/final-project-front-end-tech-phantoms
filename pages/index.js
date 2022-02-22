import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome, {user.name}!
        <Link href="/api/auth/[...auth0]" as="/api/auth/logout">
          <a>LOGOUT</a>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Phantom Kitchen</title>
        <meta
          name="description"
          content="Find recipes and create a meal plan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Welcome to Phantom Kitchen</h2>
        <Link href="/api/auth/[...auth0]" as="/api/auth/login">
          <a>LOGIN</a>
        </Link>
      </main>
    </div>
  );
}
