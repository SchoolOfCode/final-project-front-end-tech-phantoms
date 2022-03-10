import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import { Button, Grid, Text, Spacer } from "@nextui-org/react";

function NavBar() {
  const { user, isLoading, error } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <Grid.Container
        gap={1}
        display="flex"
        direction="row"
        alignItems="center"
        alignContent="space-between"
        justify="space-between"
      >
        <Grid sm>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Link href="/" passHref>
            <a>
              <Image
                height={40}
                width={40}
                alt={"Phantom logo"}
                src={"/little_ghost.svg"}
              /></a>
            </Link>
            <Link href="/" passHref><a>
              <Text size="1.5em" weight="normal" style={{ paddingLeft: "5px" }}>
                Phantom Kitchen
              </Text></a>
            </Link>
          </div>
        </Grid>

        <Spacer x={1} />

        <Grid sm>
          <Link href="/profile" passHref>
          <a>
            <Image
              height={36}
              width={36}
              src="/profile_icon.svg"
              alt="profile logo"
            /></a>
          </Link>
        </Grid>
      </Grid.Container>
    );
  }

  return (
    <Grid.Container
      gap={1}
      display="flex"
      direction="row"
      alignItems="center"
      justify="space-between"
    >
      <Grid xs>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Link href="/" passHref>
            <Image
              height={36}
              width={36}
              alt={"Phantom logo"}
              src={"/little_ghost.svg"}
            />
          </Link>
          <Link href="/" passHref>
            <Text size="1em" weight="semibold" style={{ paddingLeft: "5px" }}>
              Phantom Kitchen
            </Text>
          </Link>
        </div>
      </Grid>

      <Spacer x={1} />

      <Grid sm>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: "2px",
          }}
        >
          <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
            <Button light size="sm" auto>
              Sign up
            </Button>
          </Link>
          <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
            <Button size="sm" rounded auto>
              Log in
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid.Container>
  );
}

export default NavBar;
