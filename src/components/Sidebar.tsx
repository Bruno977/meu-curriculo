'use client';
import React, { useEffect, useState } from 'react';
import {
  Bars3Icon,
  EnvelopeOpenIcon,
  HomeIcon,
  UserIcon,
  WalletIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [toggleSidebar, setToggleSidebar] = useState(false);

  useEffect(() => {
    setToggleSidebar(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        className="w-12 h-12 bg-zinc-700 lg:bg-zinc-800 rounded-full flex items-center justify-center 
        fixed top-5 left-5 z-20"
        type="button"
        data-drawer-target="drawer-navigation"
        data-drawer-show="drawer-navigation"
        aria-controls="drawer-navigation"
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        <Bars3Icon className="h-6 w-6 text-white" />
      </button>

      <aside
        id="drawer-navigation"
        className={`fixed top-0 -left-1 z-40 w-64 h-screen p-4 overflow-y-auto 
        transition-transform  bg-zinc-800 ${
          toggleSidebar ? 'transform-none' : '-translate-x-full'
        }`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold uppercase text-gray-400"
        >
          Menu
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          onClick={() => setToggleSidebar(false)}
          className=" bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 rounded-lg dark:text-white  hover:bg-gray-700 group"
              >
                <HomeIcon className="w-5 h-5 transition duration-75 text-gray-400  group-hover:text-white" />
                <span className="ml-3">Inicio</span>
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="flex items-center p-2 rounded-lg dark:text-white  hover:bg-gray-700 group"
              >
                <UserIcon className="w-5 h-5 transition duration-75 text-gray-400  group-hover:text-white" />
                <span className="ml-3">Sobre</span>
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="flex items-center p-2 rounded-lg dark:text-white  hover:bg-gray-700 group"
              >
                <WalletIcon className="w-5 h-5 transition duration-75 text-gray-400  group-hover:text-white" />
                <span className="ml-3">Portfólio</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="flex items-center p-2 rounded-lg dark:text-white  hover:bg-gray-700 group"
              >
                <EnvelopeOpenIcon className="w-5 h-5 transition duration-75 text-gray-400  group-hover:text-white" />
                <span className="ml-3">Contato</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      {toggleSidebar && (
        <div
          drawer-backdrop=""
          onClick={() => setToggleSidebar(false)}
          className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"
        ></div>
      )}
    </>
  );
}
