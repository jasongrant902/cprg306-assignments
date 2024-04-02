"use client"


import { engageAuth } from "./_utils/auth-context"

const Week8 = () => {
  const { user, gitHubSignIn, firebaseSignOut } = engageAuth();

  const signIn = async () => {
      await gitHubSignIn();
  };

  return (
      <div className="bg-blue-200 h-screen flex">
          {user ? user : "Hello there"}
          <button onClick={signIn}>Sign in to GitHub</button>
      </div>
  );
};

export default Week8