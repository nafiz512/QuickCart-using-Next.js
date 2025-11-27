"use client";
import Banner from "@/components/Banner";
import FeaturedProduct from "@/components/FeaturedProduct";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import NewsLetter from "@/components/NewsLetter";
import RecentProducts from "@/components/RecentProducts";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";

const ACCENT_COLOR = "#00C897";
export default function Home() {
    const axios = useAxios();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`/products`).then((data) => {
            setProducts(data.data);
        });
    }, [axios]);
    return (
        <div className=" min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <HeaderSlider />
            <RecentProducts products={products}></RecentProducts>
            <HomeProducts products={products} />
            <FeaturedProduct />
            <Banner />
            <div className="my-15">
                <section className="mb-20 p-8 md:p-12 bg-gray-800/70 rounded-3xl border border-gray-700/50">
                    <h2
                        className="text-4xl font-extrabold tracking-tight text-center mb-8"
                        style={{ color: ACCENT_COLOR }}
                    >
                        Trust Through Transparency
                    </h2>
                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Trust Pillars */}
                        <div className="lg:col-span-2 space-y-6 text-gray-400">
                            <h3 className="text-2xl font-semibold text-gray-200">
                                Secure Transactions & Quality Assurance
                            </h3>
                            <p className="leading-relaxed">
                                Every listing on SparkCart undergoes rigorous
                                quality assurance checks, ensuring the device
                                meets our high standards. We provide
                                transparent, verifiable listing history and
                                utilize secure escrow services to protect both
                                buyers and sellers in every transaction.
                            </p>

                            {/* Testimonial Placeholder */}
                            <blockquote className="p-4 border-l-4 border-accent italic text-gray-300 bg-gray-900 rounded-lg">
                                SparkCart made selling my old laptop effortless
                                and secure. The transparency of the listing
                                process is unmatched. - Satisfied Seller, T.L.
                            </blockquote>
                        </div>

                        {/* Market Insight Widget (Simulated Google Search Grounding) */}
                        <div className="lg:col-span-1 p-6 rounded-xl bg-gray-900 border border-accent shadow-accent-light">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke={ACCENT_COLOR}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 20V10" />
                                    <path d="M12 20V4" />
                                    <path d="M6 20v-6" />
                                </svg>
                                The Current Tech Landscape
                            </h3>
                            <div className="h-0.5 w-1/3 bg-accent mb-4"></div>
                            <p className="text-sm font-light italic text-gray-400 mb-4">
                                *Simulated Data from Grounded API*
                            </p>
                            <p
                                className="text-lg font-medium leading-snug"
                                style={{ color: ACCENT_COLOR }}
                            >
                                The current global market indicates a{" "}
                                <span className="text-2xl font-extrabold">
                                    12% rise
                                </span>{" "}
                                in refurbished laptop transactions this quarter.
                            </p>
                            <p className="mt-3 text-sm text-gray-500">
                                SparkCart’s commitment to sustainable commerce
                                is based on adapting to and facilitating
                                real-time market data and trends.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <NewsLetter />
        </div>
    );
}
