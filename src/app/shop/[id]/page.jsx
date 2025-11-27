"use client";
import { use, useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import React from "react";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import useAxios from "@/hooks/useAxios";

const Product = ({ params }) => {
    const { id } = use(params);
    const axios = useAxios();
    const [product, setProduct] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (!id) return;
        axios.get(`/products/${id}`).then((data) => {
            setProduct(data.data);
        });
    }, [axios, id]);
    return (
        <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
            <CircleArrowLeft
                onClick={() => {
                    router.back();
                }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="px-5 lg:px-16 xl:px-20">
                    <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
                        <Image
                            src={product.productImage}
                            alt="alt"
                            className="w-full h-auto object-cover mix-blend-multiply"
                            width={1280}
                            height={720}
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
                        {product.productName}
                    </h1>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            <p className="text-lg">({product.ratings})</p>
                            {Array.from({
                                length: Math.ceil(product.ratings),
                            }).map((_, index) => (
                                <Image
                                    key={index}
                                    className="h-5 w-5"
                                    src={
                                        index < Math.floor(4)
                                            ? assets.star_icon
                                            : assets.star_dull_icon
                                    }
                                    alt="star_icon"
                                />
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-600 mt-3">
                        {product.shortDesription}
                    </p>
                    <p className="text-3xl font-medium mt-6">
                        ${product.price}
                    </p>
                    <hr className="bg-gray-600 my-6" />
                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse w-full max-w-72">
                            <tbody>
                                <tr>
                                    <td className="text-gray-600 font-medium">
                                        Brand
                                    </td>
                                    <td className="text-gray-800/50 ">
                                        Generic
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 font-medium">
                                        Color
                                    </td>
                                    <td className="text-gray-800/50 ">Multi</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 font-medium">
                                        Category
                                    </td>
                                    <td className="text-gray-800/50">
                                        {product.category}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center mt-10 gap-4">
                        <button className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                            Add to Cart
                        </button>
                        <button className="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            <div className="">
                <h2 className="font-bold text-2xl">Description</h2>
                <p className="text-gray-500">{product.description}</p>
            </div>
        </div>
    );
};

export default Product;

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
