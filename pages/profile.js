import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "../Components/NavBar";
import { Avatar } from "@nextui-org/react";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <h2>Profile</h2>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Avatar src={user.picture} css={{ size: "120px" }} />
        </div>
        <h4>{user.email}</h4>
        <Link href="/api/auth/[...auth0]" as="/api/auth/logout" passHref>
          <button>Log Out</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <main>
        <p>You are not logged in.</p>
        <Link href="/api/auth/[...auth0]" as="/api/auth/login">
          <a>LOGIN</a>
        </Link>
      </main>
    </div>
  );
}
