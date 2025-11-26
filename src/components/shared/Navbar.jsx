"use client";
import React, { use, useContext, useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";

import AuthContext from "@/context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const [openDropdown, setOpenDropdown] = useState(false);

    const handelLogOut = () => {
        logout();
    };

    const links = (
        <>
            <li>
                <Link href="/" className="hover:text-gray-900 transition">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/shop" className="hover:text-gray-900 transition">
                    Shop
                </Link>
            </li>
            <li>
                <Link href="/about" className="hover:text-gray-900 transition">
                    About Us
                </Link>
            </li>
            <li>
                <Link
                    href="/contact"
                    className="hover:text-gray-900 transition"
                >
                    Contact
                </Link>
            </li>
        </>
    );

    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <Image
                        className="cursor-pointer w-28 md:w-32"
                        src={assets.logo}
                        alt="logo"
                    />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="navbar-end">
                            <div
                                className="relative"
                                onMouseEnter={() => setOpenDropdown(true)}
                                onMouseLeave={() => setOpenDropdown(false)}
                            >
                                <button className="flex items-center gap-2 hover:text-gray-900 transition cursor-pointer">
                                    <Image
                                        className="h-12 w-12 rounded-full"
                                        src={user?.image}
                                        alt="user icon"
                                        width={48}
                                        height={48}
                                    />
                                </button>
                                {/* Dropdown */}
                                {openDropdown && (
                                    <div className="absolute right-0 top-10 mt-2 w-40 bg-white border rounded-md shadow-lg py-2 z-50">
                                        <Link
                                            href="/"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            My Profile
                                        </Link>
                                        <Link
                                            href="/addProduct"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            Add Products
                                        </Link>
                                        <Link
                                            href="/manageProduct"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            Manage Products
                                        </Link>

                                        {/* <Link
                                            href="/"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            Orders
                                        </Link> */}
                                        <button
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                            onClick={handelLogOut}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <Link href={"/login"}>
                            <button className="btn bg-white text-black h-9 rounded-3xl">
                                Log in
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
