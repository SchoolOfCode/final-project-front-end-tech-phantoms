import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "../Components/NavBar";
import { Avatar, Button } from "@nextui-org/react";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/" passHref>
            <Button size="xs" color="success">
              Back
            </Button>
          </Link>

          <h2>Profile</h2>
          <Link href="/api/auth/[...auth0]" as="/api/auth/logout" passHref>
            <Button size="xs" color="error">
              Log Out
            </Button>
          </Link>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar src={user.picture} css={{ size: "120px" }} />
          <h4>{user.email}</h4>
        </div>
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
