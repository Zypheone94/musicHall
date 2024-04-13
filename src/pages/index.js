import { Inter } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Get the user data
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <main
      id="container"
      className={`flex min-h-screen flex-col items-center justify-between px-20 ${inter.className}`}
    >
      <div id="app-body" className="w-full">
        <Navbar user={user} />
      </div>
      {user && (
        <div>
          <p>Bonjour : {user.name}</p>
          <img src={user.picture} alt={`${user.name}-profile-pic`} />
        </div>
      )}
    </main>
  );
}
