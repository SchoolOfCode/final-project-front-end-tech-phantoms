import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Link from "next/link";
import { Button, Spacer } from "@nextui-org/react";
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
        <Spacer y={1} />
        <div
          className="navigationButtons"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10vw",
            marginRight: "10vw"
          }}
        >
          {user ? (
            <Link href="/mealPlanner" passHref>
              <Button shadow color="gradient" size="xl">
                Meal Planner
              </Button>
            </Link>
          ) : (
            <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
              <Button shadow color="gradient" size="xl">
                Meal Planner
              </Button>
            </Link>
          )}
          <Spacer y={1} />
          {user ? (
            <Link href={"/shopping_list/" + user.email} passHref>
              <Button shadow color="gradient" size="xl">
                Shopping List
              </Button>
            </Link>
          ) : (
            <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
              <Button shadow color="gradient" size="xl">
                Shopping List
              </Button>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
