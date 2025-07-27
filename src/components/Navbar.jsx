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
                    <Link href='/' className="font-medium text-gray-700 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/about' className="font-medium text-gray-700 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
                        About
                    </Link>
                </li>
                <li>
                    <Link href='/services' className="font-medium text-gray-700 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
                        Services
                    </Link>
                </li>
                <li>
                    <Link href='/blogs' className="font-medium text-gray-700 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link href='/contacts' className="font-medium text-gray-700 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
                        Contacts
                    </Link>
                </li>
            </>
        )
    }
    return (
        <div className="navbar bg-white border-b border-gray-100 px-4 md:px-8 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-56 p-2 shadow-lg border border-gray-100">
                        {navMenu()}
                    </ul>
                </div>
                <Link href='/' className="btn btn-ghost px-0 hover:bg-transparent">
                    <span className="flex items-center gap-3">
                        <Image 
                            src={'https://www.motorcyclevalley.com/images/logo.png'} 
                            width={50} 
                            height={50} 
                            alt="Buick Service Logo" 
                            className="rounded-lg"
                        />
                        <span className="font-bold text-xl text-red-700">Bike Service</span>
                    </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1">
                    {navMenu()}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    session ? (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {session.user?.image && (
                                    <Image 
                                        src={session.user.image} 
                                        width={36} 
                                        height={36} 
                                        alt="User avatar" 
                                        className="rounded-full"
                                    />
                                )}
                                <p className="font-medium text-gray-700">{session.user.name}</p>
                            </div>
                            <button 
                                className='btn btn-outline btn-error text-error hover:bg-error hover:text-white' 
                                onClick={() => signOut()}
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div className='flex items-center gap-4'>
                            <Link href='/logIn' className="font-medium text-gray-700 hover:text-red-700 px-4 py-2">
                                Log In
                            </Link>
                        </div>
                    )
                }
                <Link href="/appointment" className="btn bg-red-600 text-white px-6 shadow-md hover:shadow-lg border-none">
                    Appointment
                </Link>
            </div>
        </div>
    );
};

export default Navbar;