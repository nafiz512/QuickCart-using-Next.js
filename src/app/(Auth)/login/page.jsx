"use client";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import React, { use, useContext, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const page = () => {
    const { login, user, logout } = use(AuthContext);
    // console.log(user);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = () => {
        // login();
        login({ callbackUrl: "/" });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submited");
    };

    return (
        <div>
            <div className="w-full">
                {/* Image Banner */}
                <div className=" h-[600px] flex flex-col items-center justify-center ">
                    <h2 className="text-3xl md:text-4xl text-center w-full font-semibold mb-10">
                        Please Login here
                    </h2>

                    {/* Login Form */}
                    <div className="card relative shadow-2xl w-[350px] sm:min-w-sm">
                        <div className="w-full card-body text-center">
                            <p className="absolute -top-3 -left-5 font-semibold text-2xl">
                                Log-in
                            </p>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-2"
                            >
                                {/* Email */}

                                <label className="label text-left">
                                    <span className="text-lg font-medium">
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input  input-bordered placeholder:text-gray-500 w-full rounded-lg focus:outline-none "
                                />
                                {/* Label Password*/}
                                <label className="label">
                                    <span className="text-lg  font-medium">
                                        Password
                                    </span>
                                </label>
                                <div className="relative w-full">
                                    {/* Input */}
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        placeholder="Enter your password"
                                        className="input  input-bordered placeholder:text-gray-500 w-full rounded-lg pr-10 focus:outline-none "
                                    />

                                    {/* Eye Icon */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-2 top-[50%] -translate-y-1/2 text-gray-500 hover:text-[#b0e7c2]"
                                    >
                                        {showPassword ? (
                                            <EyeOff
                                                size={20}
                                                strokeWidth={1.8}
                                            />
                                        ) : (
                                            <Eye size={20} strokeWidth={1.8} />
                                        )}
                                    </button>
                                </div>

                                {/* Forgot password */}
                                <div className="text-left">
                                    <Link
                                        href={"/reset-password"}
                                        className="text-[16px]  text-[#5d5fe9] hover:underline"
                                    >
                                        Forgot Password ?
                                    </Link>
                                </div>
                                <div>
                                    {error && (
                                        <p className="text-red-400">{error}</p>
                                    )}
                                </div>
                                {/* Login Button */}
                                <button className="btn bg-[#e5e5e5ad] border-[#e5e5e5] hover:bg-green-200 text-black w-full rounded-lg font-semibold">
                                    Login
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="  text-[16px] text-sm my-1">
                                Or continue with
                            </div>

                            {/* Google */}
                            <button
                                onClick={handleLogin}
                                className="btn bg-[#e5e5e5ad] hover:bg-green-200 w-full text-black rounded-lg border-[#e5e5e5]"
                            >
                                <FcGoogle size={20}></FcGoogle>
                                <span> Login with Google</span>
                            </button>

                            {/* Sign up link */}
                            <p className="  text-[16px] text-sm my-1">
                                Don’t have an account?
                                <Link
                                    href={"/register"}
                                    className="text-[16px]  text-[#5d5fe9] ml-1 hover:underline"
                                >
                                    Sign up here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
