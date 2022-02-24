import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";

function NavBar() {
  const { user, isAuthenticated, isLoading, error } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <div>Phantom Kitchen</div>
        <Image height={500} width={500} src={user.picture} alt="User Image" />
        <p>You are in</p>
      </>
    );
  }

  return (
    <>
      <div>Phantom Kitchen</div>
      <Link href="/api/auth/[...auth0]" as="/api/auth/login">
        <a>LOGIN</a>
      </Link>
    </>
  );
}

export default NavBar;
