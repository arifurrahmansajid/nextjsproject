"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const { data: session, status } = useSession()
    console.log(session)
    const navMenu = () => {

        return (
            <>
                <li>
                    <Link href='/' className="transition-colors duration-200 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/about' className="transition-colors duration-200 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md">
                        About
                    </Link>
                </li>
                <li>
                    <Link href='/services' className="transition-colors duration-200 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md">
                        Services
                    </Link>
                </li>
                <li>
                    <Link href='/blogs' className="transition-colors duration-200 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md">
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link href='/contacts' className="transition-colors duration-200 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md">
                        Contacts
                    </Link>
                </li>
            </>
        )
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Link href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </Link>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navMenu()}
                    </ul>
                </div>
                <Link href='/' className="btn btn-ghost text-xl">
                    <span className="flex items-center gap-2 transition-transform duration-200 hover:scale-110">
                        <Image src={'https://www.motorcyclevalley.com/images/logo.png'} width={50} height={50} alt="Buick Service Logo" />
                        <span className="font-bold text-lg text-blue-700">Buick Service</span>
                    </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu()}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    session ?
                        <>
                            <p>{session.user.name}</p>
                            <button className='btn btn-secondary' onClick={() => signOut()}> Log Out</button>
                        </>
                        :
                        <div className='flex gap-2'>
                            <Link href='/logIn'>
                            Log In
                            </Link>

                        </div>
                }
                <a className="btn btn-outline">Appointment</a>
            </div>
        </div >
    );
};

export default Navbar;