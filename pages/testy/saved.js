import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <p>
          Hello, {user.name}, you are seeing your saved recipes.
          <br />
          Your name is {user.name}, your email is {user.email}.
        </p>
        <Link href="/api/auth/[...auth0]" as="/api/auth/logout">
          <a>LOGOUT</a>
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
