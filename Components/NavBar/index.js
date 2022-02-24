import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";

function NavBar() {
  const { user, isLoading, error } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <Image
          height={50}
          width={50}
          alt={"Phantom logo"}
          src={
            "https://cdn.icon-icons.com/icons2/1897/PNG/512/ghost_120956.png"
          }
        />
        <div>Phantom Kitchen</div>
        <Link href="/profile" passHref>
          <Image height={50} width={50} src={user.picture} alt="User Image" />
        </Link>
        <p>You are in</p>
      </>
    );
  }

  return (
    <>
      <Image
        height={50}
        width={50}
        alt={"Phantom logo"}
        src={"https://cdn.icon-icons.com/icons2/1897/PNG/512/ghost_120956.png"}
      />
      <div>Phantom Kitchen</div>
      <Link href="/api/auth/[...auth0]" as="/api/auth/login">
        <a>Sign up</a>
      </Link>
      <Link href="/api/auth/[...auth0]" as="/api/auth/login">
        <a>LOGIN</a>
      </Link>
    </>
  );
}

export default NavBar;
