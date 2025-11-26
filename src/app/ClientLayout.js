"use client";

import { SessionProvider } from "next-auth/react";
import AuthProvider from "@/context/AuthProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function ClientLayout({ children }) {
    return (
        <SessionProvider>
            <AuthProvider>
                <Navbar></Navbar>
                {children}
            </AuthProvider>
            <Footer></Footer>
        </SessionProvider>
    );
}
