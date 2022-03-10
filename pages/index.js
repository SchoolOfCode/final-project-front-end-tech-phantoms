import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Link from "next/link";
import Image from "next/image";
import { Button, Grid, Spacer } from "@nextui-org/react";
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
            marginRight: "10vw",
          }}
        >
          {user ? (
            <Link href="/mealPlanner" passHref>
              <Button shadow color="gradient" size="xl">
                <Image
                  height={35}
                  width={35}
                  alt={"Meal Planner Icon"}
                  src="/calendar.svg"
                />
                <Spacer x={1} />
                Meal Planner
              </Button>
            </Link>
          ) : (
            <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
              <Button shadow color="gradient" size="xl">
                <Image
                  height={35}
                  width={35}
                  alt={"Meal Planner Icon"}
                  src="/calendar.svg"
                />
                Meal Planner
              </Button>
            </Link>
          )}
          <Spacer y={1} />

          {user ? (
            <Link href={"/saved_recipes/"+user.email} passHref>
              <Button shadow color="gradient" size="xl">
                <Image
                  height={35}
                  width={35}
                  alt={"Saved Recipes Icon"}
                  src="/book.svg"
                />
                <Spacer x={1} />
                Saved Recipes
              </Button>
            </Link>
          ) : (
            <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
              <Button shadow color="gradient" size="xl">
                <Image
                  height={35}
                  width={35}
                  alt={"Saved Recipes Icon"}
                  src="/book.svg"
                />
                Saved Recipes
              </Button>
            </Link>
          )}
          <Spacer y={1} />
          {user ? (
            <Link href={"/shopping_list/" + user.email} passHref>
              <Button shadow color="gradient" size="xl">
                <Image
                  height={35}
                  width={35}
                  alt={"Meal Planner Icon"}
                  src="/list_icon.svg"
                />
                <Spacer x={1} />
                Shopping List
              </Button>
            </Link>
          ) : (
            <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
              <Button shadow color="gradient" size="xl">
                <Image
                  height={35}
                  width={35}
                  alt={"Meal Planner Icon"}
                  src="/list_icon.svg"
                />
                <Spacer x={1} />
                Shopping List
              </Button>
            </Link>
          )}
          <Spacer y={2} />
          <Button size="lg" shadow color="secondary" ghost>
            Recipe of the Day
          </Button>
          <Spacer y={0.5} />
          <Button size="lg" shadow color="secondary" ghost>
            Quick Meals
          </Button>
          <Spacer y={0.5} />
          
        </div>
      </main>
    </div>
  );
}
