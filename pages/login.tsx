import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import Container from '../components/Container';
import { auth } from '../lib/firebase';

function Login(): ReactElement {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log('authUser', authUser);
        if(authUser){
            alert("logged in!")
        }
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <form className="container " onSubmit={signIn}>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-800 sm:text-4xl dark:text-white mb-3">
            Masuk
          </h1>
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Email
            </label>
            <input
              type="email"
              className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="Email"
              style={{ transition: 'all .15s ease' }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              type="password"
              className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="Password"
              style={{ transition: 'all .15s ease' }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="text-center mt-2  mb-4">
            <button
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 w-full"
              type="button"
              style={{ transition: 'all .15s ease' }}
              onClick={signIn}
            >
              Login
            </button>
            <Link href="/">
              <a className="text-gray-500 dark:text-indigo-400">Daftar</a>
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Login;
