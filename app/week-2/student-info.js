import Link from 'next/link';
import React from 'react';

const StudentInfo = () => {
  return (
    <div>
      <h1>Jason Grant</h1>
      <p>
        <Link href="https://github.com/jasongrant902/cprg306-assignments">
        Click Here For My GitHub
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
