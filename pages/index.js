import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user } = useUser();
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
        <NavBar />
        <SearchBar></SearchBar>
        <h2 className={styles.title}>Welcome to Phantom Kitchen</h2>
        {user ? (
          <Link href="/mealPlanner" passHref>
            <button>Meal Planner</button>
          </Link>
        ) : (
          <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
            <button>Meal Planner</button>
          </Link>
        )}
        {user ? (
          <Link href={"/saved_recipes/" + user.email} passHref>
            <button>Saved Recipes</button>
          </Link>
        ) : (
          <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
            <button>Saved Recipes</button>
          </Link>
        )}
      </main>
    </div>
  );
}
