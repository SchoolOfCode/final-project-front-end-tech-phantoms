import React from "react";
import Link from "next/link";

function NavBar() {
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
