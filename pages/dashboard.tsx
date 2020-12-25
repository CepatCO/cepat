import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import Container from '../components/Container';

function Login(): ReactElement {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-800 sm:text-4xl dark:text-white mb-3">
          Dashboard
        </h1>
      </div>
    </Container>
  );
}

export default Login;
