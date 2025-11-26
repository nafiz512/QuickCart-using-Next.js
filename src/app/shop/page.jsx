import ProductCard from "@/components/ProductCard";
import React from "react";
import { assets } from "@/assets/assets";

const Shop = () => {
    return (
        <div className=" pt-14 pb-10 space-y-10">
            {/* --- Title & Description Section --- */}
            <header className="text-center space-y-2">
                <h1 className="text-4xl font-bold text-gray-900">
                    Our Digital Marketplace
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    Explore our curated collection of high-quality products. Use
                    the search bar or filters to find exactly what you're
                    looking for.
                </p>
            </header>

            {/* --- Search & Filter Section (UI Only) --- */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Search Bar */}
                <div className=" max-w-96 grow ">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                    />
                </div>

                {/* Category Filter */}
                <div className="w-full flex justify-center items-center md:w-auto">
                    <p className="mr-6">Filter: </p>
                    <select className="w-full p-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition-shadow">
                        <option value="">All Categories</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="home">Home & Decor</option>
                        <option value="books">Books</option>
                    </select>
                </div>
            </div>

            {/* --- Product Grid Section --- */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;

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
    {
        id: 7,
        name: "MacBook Pro 16",
        description: "M2 Pro Chip, 16GB RAM, 512GB SSD",
        rating: 4.5,
        price: "$2,499.99",
        imgSrc: assets.macbook_image,
    },
    {
        id: 8,
        name: "Sony WF-1000XM5",
        description: "Noise-Cancellation, Hi-Res Audio",
        rating: 4.5,
        price: "$299.99",
        imgSrc: assets.sony_airbuds_image,
    },
    {
        id: 9,
        name: "Samsung Projector 4k",
        description: "4K Ultra HD, Realistic, Built-In Speaker",
        rating: 4.5,
        price: "$1,499.99",
        imgSrc: assets.projector_image,
    },
    {
        id: 10,
        name: "ASUS ROG Zephyrus G16",
        description: "Intel Core i9, RTX 4070, 16GB, 1TB",
        rating: 4.5,
        price: "$1,999.99",
        imgSrc: assets.asus_laptop_image,
    },
    {
        id: 11,
        name: "Apple Earphones",
        description: "Noise-cancellation, 40-hour battery",
        rating: 4.5,
        price: "$299.99",
        imgSrc: assets.apple_earphone_image,
    },
    {
        id: 12,
        name: "Bose QuietComfort 45",
        description: "Noise Cancellation, 24-hour battery",
        rating: 4.5,
        price: "$329.99",
        imgSrc: assets.bose_headphone_image,
    },
    {
        id: 13,
        name: "Samsung Galaxy S23",
        description: "Fitness Tracking, AMOLED Display",
        rating: 4.5,
        price: "$799.99",
        imgSrc: assets.samsung_s23phone_image,
    },
    {
        id: 14,
        name: "Garmin Venu 2",
        description: "Noise Cancellation, 24-hour battery",
        rating: 4.5,
        price: "$349.99",
        imgSrc: assets.venu_watch_image,
    },
    {
        id: 15,
        name: "PlayStation 5",
        description: "Ultra-HD, 825GB SSD, Ray Graphics",
        rating: 4.5,
        price: "$499.99",
        imgSrc: assets.apple_earphone_image,
    },
    {
        id: 16,
        name: "Canon EOS R5",
        description: "45MP Sensor, 8K Video Recording",
        rating: 4.5,
        price: "$3,899.99",
        imgSrc: assets.cannon_camera_image,
    },
    {
        id: 17,
        name: "MacBook Pro 16",
        description: "M2 Pro Chip, 16GB RAM, 512GB SSD",
        rating: 4.5,
        price: "$2,499.99",
        imgSrc: assets.macbook_image,
    },
    {
        id: 18,
        name: "Sony WF-1000XM5",
        description: "Noise-Cancellation, Hi-Res Audio",
        rating: 4.5,
        price: "$299.99",
        imgSrc: assets.sony_airbuds_image,
    },
    {
        id: 19,
        name: "Samsung Projector 4k",
        description: "4K Ultra HD, Realistic, Built-In Speaker",
        rating: 4.5,
        price: "$1,499.99",
        imgSrc: assets.projector_image,
    },
    {
        id: 20,
        name: "ASUS ROG Zephyrus G16",
        description: "Intel Core i9, RTX 4070, 16GB, 1TB",
        rating: 4.5,
        price: "$1,999.99",
        imgSrc: assets.asus_laptop_image,
    },
];
