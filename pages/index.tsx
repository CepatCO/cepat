import Timeline from '../components/Timeline';
import Container from '../components/Container';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';
import { AuthContext } from '../providers/Auth';

export default function Home() {
  const [displayRegist, setDisplayRegist] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { currentUser } = useContext(AuthContext);

  const signUp = (e: React.FormEvent) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        setDisplayRegist(false);
        return authUser.user.updateProfile({
          displayName: null,
          photoURL: null
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex justify-between mb-16 mt-16 container flex-col sm:flex-row w-full">
          {displayRegist ? (
            <SignupForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              signUp={signUp}
            />
          ) : (
            <div className="block mb-10">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-800 sm:text-4xl dark:text-white mb-3">
                <span className="block">Jual produk anda</span>
                <span className="block text-yellow-400">dengan cepat.</span>
              </h1>
              <h2 className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-4">
                Tinggalkan gform untuk
                <br /> berjualan produk anda
              </h2>
              <div className="inline-flex rounded-md shadow">
                <a
                  style={{ transition: 'all .15s ease' }}
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-yellow-400"
                  onClick={() => setDisplayRegist(true)}
                >
                  Mulai →
                </a>
              </div>
            </div>
          )}

          <div>
            <Image
              alt={`Cepat.co User`}
              src={`/static/images/user-laptop-yellow.png`}
              width={205}
              height={229}
              priority
              className="w-1/2 sm:w-full"
            />
          </div>
        </div>
        {/* ALUR JUAL BELI SIMPEL */}
        <div className="flex justify-between mb-16 mt-16 container flex-col sm:flex-row">
          <div>
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-gray-700 dark:text-white mb-3">
              Alur jual-beli simpel
            </h3>
            <h2 className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-4">
              Tambahkan barang, lalu gunakan link. <br />
              Tanpa ribet seperti berjualan di e-commerce.
            </h2>
          </div>
          <div className="w-1/4">
            <Image
              alt={`Cepat.co User`}
              src={`/static/images/user-image-1.png`}
              width={563}
              height={326}
              priority
              className="w-1/4 sm:w-full"
            />
          </div>
        </div>
        {/* Beli Tanpa Login */}
        <div className="flex justify-between mb-16 mt-16 container flex-col sm:flex-row">
          <div>
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-gray-700 dark:text-white mb-3">
              Beli Tanpa Login
            </h3>
            <h2 className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-4">
              Bisa beli tanpa harus daftar email dan
              <br /> password, login, verifikasi nomor HP... <br />
              Keburu habis barangnya dong?
            </h2>
          </div>
          <div className="w-1/4">
            <Image
              alt={`Cepat.co User`}
              src={`/static/images/user-image-2.png`}
              width={563}
              height={326}
              priority
              className="w-1/4 sm:w-full"
            />
          </div>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}

const SignupForm = ({ email, setEmail, password, setPassword, signUp }) => {
  return (
    <form className="container w-full sm:w-1/2" onSubmit={signUp}>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-800 sm:text-4xl dark:text-white mb-3">
        Daftar sekarang
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
          onClick={signUp}
        >
          Daftar
        </button>
        <NextLink href="/login">
          <a className="text-gray-500 dark:text-indigo-400">Sudah punya akun</a>
        </NextLink>
      </div>
    </form>
  );
};
