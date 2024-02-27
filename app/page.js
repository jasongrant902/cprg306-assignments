import React from 'react';
import Link from 'next/link';

const App = () => {
  return (
    <main>
      <h1>CPRG306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="\week-2">
          Week 2 Assignment
        </Link>
        <br>
        </br>
        <Link href="\week-3">
          Week 3 Assignment
        </Link>
        <br></br>
        <Link href="\week-4">
          Week 4 Assignment
        </Link>
        <br></br>
        <Link href="\week-5">
          Week 5 Assignment
        </Link>
      </p>
    </main>
  );
}

export default App;