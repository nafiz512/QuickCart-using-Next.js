"use client";

import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthProvider = ({ children }) => {
    const { data: session, status } = useSession();
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(session?.user);
        // console.log(session?.user);succssfully got the user
    }, [session]);

    const login = (opts) => signIn("google", opts);
    const logout = () => signOut();

    const info = {
        user,
        loading: status === "loading",
        login,
        logout,
    };

    return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
