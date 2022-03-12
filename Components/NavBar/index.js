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
      <Grid.Container gap={1} justify="space-between">
        <Link href="/" passHref>
          <Grid>
            <a>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  height={40}
                  width={40}
                  alt={"Phantom logo"}
                  src={"/little_ghost.svg"}
                />
                <Text
                  size="1.5em"
                  weight="normal"
                  style={{ paddingLeft: "5px" }}
                >
                  Phantom Kitchen
                </Text>
              </div>
            </a>
          </Grid>
        </Link>

        <Link href="/profile" passHref>
          <Grid>
            <a>
              <Image
                height={36}
                width={36}
                src="/profile_icon.svg"
                alt="profile logo"
              />
            </a>
          </Grid>
        </Link>
      </Grid.Container>
    );
  }

  return (
    <Grid.Container
      gap={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid>
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
      </Grid>

      <Grid sm>
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
      </Grid>
    </Grid.Container>
  );
}

export default NavBar;
