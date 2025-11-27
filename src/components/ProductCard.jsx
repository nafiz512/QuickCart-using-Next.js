"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        <div className="flex shadow-lg flex-col items-start gap-0.5 p-3 max-w-[300px] w-full cursor-pointer">
            <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center">
                <Image
                    src={product.productImage}
                    alt={product.productName}
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={800}
                    height={800}
                />
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt="heart_icon"
                    />
                </button>
            </div>

            <p className="md:text-base font-medium pt-2 w-full truncate">
                {product.productName}
            </p>
            <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">
                {product.shortDesription}
            </p>
            <div className="flex items-center gap-2">
                <p className="text-xs">{product.ratings}</p>
                <div className="flex ">
                    <div className="flex items-center gap-0.5 mr-14">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image
                                key={index}
                                className="h-3 w-3"
                                src={
                                    index < Math.floor(product.ratings)
                                        ? assets.star_icon
                                        : assets.star_dull_icon
                                }
                                alt="star_icon"
                            />
                        ))}
                    </div>
                    <p>{product.price} $</p>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-3">
                <Link href={`/shop/${product._id}`} className="w-full">
                    <button className="btn btn-success w-full h-8 hover:bg-green-600 transition">
                        Buy now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
