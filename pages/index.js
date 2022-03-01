import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Link from "next/link";

export default function Home() {
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
        <Link href="/mealPlanner" passHref>
          <button>Meal Planner</button>
        </Link>
      </main>
    </div>
  );
}
