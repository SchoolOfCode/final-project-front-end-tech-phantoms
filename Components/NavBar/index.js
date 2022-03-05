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
      >
        <Grid xs={3}>
          <Image
            height={50}
            width={50}
            alt={"Phantom logo"}
            src="/little_ghost.svg"
          />
        </Grid>
        <Grid m={3}>
          <div>Phantom Kitchen</div>
        </Grid>

        <Grid xs={3}>
          <Link href="/profile" passHref>
            <Image height={50} width={50} src={user.picture} alt="User Image" />
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
      alignContent="space-between"
      justify="space-between"
    >
      <Grid sm={1}>
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
            <Text size="1em" weight="bold" style={{ paddingLeft: "5px" }}>
              Phantom Kitchen
            </Text>
          </Link>
        </div>
      </Grid>

      <Spacer x={2} />

      <Grid sm={2}>
        <Button.Group size="xs">
          <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
            <Button auto>Sign up</Button>
          </Link>
          <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
            <Button auto>Log in</Button>
          </Link>
        </Button.Group>
      </Grid>
    </Grid.Container>
  );
}

export default NavBar;
