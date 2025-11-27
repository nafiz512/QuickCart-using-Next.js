"use client";
import React, { use } from "react";
import ProductCard from "./ProductCard";

const HomeProducts = ({ products }) => {
    const topRatedProducts = products
        .slice()
        .sort((a, b) => b.ratings - a.ratings)
        .slice(0, 6);
    return (
        <div className="flex flex-col items-center pt-14">
            <p className="text-2xl font-medium text-left w-full">
                Popular products
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-col items-center gap-6 mt-6 pb-14 w-full">
                {topRatedProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomeProducts;
