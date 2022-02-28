import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "../Components/NavBar";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <NavBar />

        <Link href="/" as="/" passHref>
          <button>Back</button>
        </Link>
        <h1>Profile</h1>
        <Link href="/api/auth/[...auth0]" as="/api/auth/logout" passHref>
          <button>Log Out</button>
        </Link>

        <Image
          src={user.picture}
          width={150}
          height={150}
          alt="Profile Picture"
        ></Image>

        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
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
