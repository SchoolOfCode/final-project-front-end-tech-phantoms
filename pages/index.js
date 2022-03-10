import Head from "next/head";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Link from "next/link";
import Image from "next/image";
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
            <Link href={"/saved_recipes/" + user.email} passHref>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "3px 50px",
                  background: "#5EDEA7",
                  width: "130px",
                  height: "130px",
                  margin: "3px",
                }}
              >
                {/* <Button size="lg" shadow color="secondary" ghost> */}

                <h4 style={{ textAlign: "center" }}>Filter by Meal</h4>
                {/* </Button> */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50px 3px",
                  background: "#5EDEA7",
                  width: "130px",
                  height: "130px",
                  margin: "3px",
                }}
              >
                {/* <Button size="lg" shadow color="secondary" ghost> */}

                <h4 style={{ textAlign: "center" }}>Filter by Diet</h4>
                {/* </Button> */}
              </div>
            </div>

            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50px 3px",
                  background: "#5EDEA7",
                  width: "130px",
                  height: "130px",
                  margin: "3px",
                }}
              >
                {/* <Button size="lg" shadow color="secondary" ghost> */}

                <h4 style={{ textAlign: "center" }}>Recipe of the Day</h4>
                {/* </Button> */}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "3px 50px",
                  background: "#5EDEA7",
                  width: "130px",
                  height: "130px",
                  margin: "3px",
                }}
              >
                {/* <Button size="lg" shadow color="secondary" ghost> */}
                <h4 style={{ textAlign: "center" }}>Quick Meals</h4>
                {/* </Button> */}
              </div>
            </div>
          </div>
          <Spacer y={0.5} />
        </div>
      </main>
    </div>
  );
}
