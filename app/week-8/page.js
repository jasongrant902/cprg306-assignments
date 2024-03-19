import React from 'react';
import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context';

const HomePage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          <Link href="/week-8/shopping-list">
            <a>Go to Shopping List</a>
          </Link>
        </div>
      ) : (
        <div>
          <p>Please log in to access the application.</p>
          <button onClick={handleLogin}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
