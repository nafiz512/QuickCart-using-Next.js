"use client";
import React, { use } from "react";
import ProductCard from "./ProductCard";
import { assets } from "@/assets/assets";
import AuthContext from "@/context/AuthContext";

const RecentProducts = () => {
    return (
        <div className="flex flex-col items-center pt-14">
            <p className="text-2xl font-medium text-left w-full">
                Recent Products
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default RecentProducts;

const products = [
    {
        id: 1,
        name: "Apple Earphones",
        description: "Noise-cancellation, 40-hour battery",
        rating: 4.5,
        price: "$299.99",
        imgSrc: assets.apple_earphone_image,
    },
    {
        id: 2,
        name: "Bose QuietComfort 45",
        description: "Noise Cancellation, 24-hour battery",
        rating: 4.5,
        price: "$329.99",
        imgSrc: assets.bose_headphone_image,
    },
    {
        id: 3,
        name: "Samsung Galaxy S23",
        description: "Fitness Tracking, AMOLED Display",
        rating: 4.5,
        price: "$799.99",
        imgSrc: assets.samsung_s23phone_image,
    },
    {
        id: 4,
        name: "Garmin Venu 2",
        description: "Noise Cancellation, 24-hour battery",
        rating: 4.5,
        price: "$349.99",
        imgSrc: assets.venu_watch_image,
    },
    {
        id: 5,
        name: "PlayStation 5",
        description: "Ultra-HD, 825GB SSD, Ray Graphics",
        rating: 4.5,
        price: "$499.99",
        imgSrc: assets.apple_earphone_image,
    },
    {
        id: 6,
        name: "Canon EOS R5",
        description: "45MP Sensor, 8K Video Recording",
        rating: 4.5,
        price: "$3,899.99",
        imgSrc: assets.cannon_camera_image,
    },
];
