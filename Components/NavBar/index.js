import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import { Button, Grid } from "@nextui-org/react";

function NavBar() {
  const { user, isLoading, error } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <Grid.Container gap={4} justify="center">
        <Grid xs={3}>
          <Image
            height={50}
            width={50}
            alt={"Phantom logo"}
            src={
              "https://cdn.icon-icons.com/icons2/1897/PNG/512/ghost_120956.png"
            }
          />
        </Grid>
        <Grid m={3}>
          <div>Phantom Kitchen</div>{" "}
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
    <Grid.Container gap={1} justify="center">
      <Grid m={3}>
        <Image
          height={50}
          width={50}
          alt={"Phantom logo"}
          src={
            "https://cdn.icon-icons.com/icons2/1897/PNG/512/ghost_120956.png"
          }
        />
      </Grid>
      <Grid m={3}>
        <div>Phantom Kitchen</div>
      </Grid>
      <Grid xs={3}>
        <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
          <Button auto>Sign up</Button>
        </Link>
      </Grid>
      <Grid xs={3}>
        <Link href="/api/auth/[...auth0]" as="/api/auth/login" passHref>
          <Button auto>LOGIN</Button>
        </Link>
      </Grid>
    </Grid.Container>
  );
}

export default NavBar;
