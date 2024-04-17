"use client"


import { engageAuth } from "./_utils/auth-context"
import Link from "next/link";

const Week8 = () => {
  const { user, gitHubSignIn, firebaseSignOut } = engageAuth();

  const signIn = async () => {
      await gitHubSignIn();
  };

  return (
    <div className="bg-blue-200 h-screen flex flex-col items-center justify-center">
      {user ? (
        <>
          <p>Signed in as {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut}>Sign out</button>
          <Link href="./week-8/shopping-list">
            <span className="text-blue-700 underline mt-4">Continue to shopping list</span>
          </Link>
        </>
      ) : (
        <>
          <p>Hello there</p>
          <button onClick={signIn}>Sign in</button>
        </>
      )}
    </div>
  );
};

export default Week8;