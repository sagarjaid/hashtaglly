import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import LoginWithGoogle from './LoginWithGoogle';

import { signInWithPopup } from 'firebase/auth';
import { db, auth, provider } from './firebase';
import { addUser } from './createUser';

const Nav = () => {
  const [toggle, setToogle] = useState(false);
  const [user, setUser] = useState();

  let Name;
  let Email;

  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();

  const handleToogle = () => {
    setToogle(!toggle);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Name = window.localStorage.getItem('userName');
      setUserName(Name);
      Email = window.localStorage.getItem('userEmail');
      setUserEmail(Email);
    }
  }, [user, Name, Email]);

  const loginwithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result?.user, 'Nav');
    setUser(result?.user);

    let userData = {
      uid: result?.user?.uid,
      email: result?.user?.email,
      name: result?.user?.displayName,
      photoUrl: result?.user?.photoURL,
    };

    const userAdded = await addUser(userData);

    console.log(userAdded, ':: user has been added?');

    window.localStorage.setItem('userName', `${result.user?.displayName}`);
    window.localStorage.setItem('userEmail', `${result.user?.email}`);
  };

  const handleLogout = () => {
    auth.signOut();
    window.localStorage.setItem('userName', '');
    window.localStorage.setItem('userEmail', '');
    window.location.reload();
  };

  return (
    <>
      <nav className="flex w-full items-center justify-between p-4">
        <a href="/">
          <img src="/hashtaglly-logo.svg" className="w-[120px]" />
        </a>

        <div>
          <ul className="flex items-center gap-2 text-sm mdx:gap-4">
            <li className="hidden cursor-pointer sm:inline">
              <a href="/hashtag">Top hashtags</a>
            </li>

            {userEmail && (
              <li
                onClick={handleLogout}
                className="group relative flex cursor-pointer"
              >
                <span className="rounded-full border border-black px-4 py-1">
                  {userEmail && userEmail}
                </span>
                <span class="absolute left-1/2 m-4 mx-auto -translate-x-1/2 translate-y-full rounded-md bg-gray-800 px-1 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100">
                  Logout
                </span>
              </li>
            )}

            <li>
              {!userName && !userEmail && (
                <LoginWithGoogle loginwithGoogle={loginwithGoogle} />
              )}
            </li>

            <li
              onClick={handleToogle}
              className="flex w-fit cursor-pointer items-center gap-1 mdx:hidden "
            >
              <svg
                fill="none"
                className="w-8"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
      {toggle && (
        <div className="absolute z-20 h-full w-full">
          <Menu handleToogle={handleToogle} />
        </div>
      )}
    </>
  );
};

export default Nav;
