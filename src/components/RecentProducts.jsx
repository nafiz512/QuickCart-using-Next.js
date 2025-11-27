"use client";
import React, { use } from "react";
import ProductCard from "./ProductCard";

const RecentProducts = ({ products }) => {
    const MAX_PRODUCTS = 6;
    const recentProducts = products
        .slice()
        .sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateB.getTime() - dateA.getTime();
        })
        .slice(0, MAX_PRODUCTS);
    return (
        <div className="flex flex-col items-center pt-14">
            <p className="text-2xl font-medium text-left w-full">
                Recent Products
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-col items-center gap-6 mt-6 pb-14 w-full">
                {recentProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default RecentProducts;
