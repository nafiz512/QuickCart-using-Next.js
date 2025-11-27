"use client";
import AuthContext from "@/context/AuthContext";
import useAxios from "@/hooks/useAxios";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const page = () => {
    const axios = useAxios();
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (!user?.email) return;

        axios.get(`/products?email=${user?.email}`).then((res) => {
            setProducts(res.data);
        });
    }, [axios, user?.email]);

    const handleDelete = (id) => {
        axios.delete(`/products/${id}`).then((data) => {
            if (data.data.deletedCount) {
                Swal.fire({
                    title: "Deleted successfully!",
                    icon: "success",
                    draggable: true,
                });
                const newProducts = products.filter(
                    (product) => product._id != id
                );
                setProducts(newProducts);
            }
        });
    };
    if (!products.length)
        return (
            <div className="h-screen flex justify-center items-center">
                <p className="text-2xl text-red-400">
                    Please add some products first, No porducts to show.
                </p>
            </div>
        );
    return (
        <div className="px-1 md:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
                {/* Header */}
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <p className="text-base-content tracking-light text-2xl md:text-4xl font-bold leading-tight min-w-72">
                        My Products
                    </p>
                </div>
                {/* <div>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <div className="flex justify-between">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <form method="dialog">
                                    <button className="px-2 py-1 rounded-sm hover:bg-accent">
                                        X
                                    </button>
                                </form>
                            </div>
                            <p className="py-4">
                                Are you sure about Delete the Item
                            </p>
                            <div className="modal-action">
                                <form method="dialog" className="space-x-3">
                             
                                    <button
                                        onClick={handleDelete}
                                        className="btn btn-success"
                                    >
                                        Confirm
                                    </button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div> */}

                {/* Table Container */}
                <div className="custom-shadow rounded-lg py-3">
                    <div className="flex overflow-auto roundedshadow-xl border border-base-300 bg-base-100">
                        <table className="flex-1 w-full">
                            <thead>
                                <tr className="bg-base-200">
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-[250px]">
                                        Product Name
                                    </th>
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-[200px]">
                                        Category
                                    </th>
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-[150px]">
                                        Price
                                    </th>
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-60">
                                        status
                                    </th>
                                    <th className="px-4 py-3 text-left text-base-content text-sm font-medium  w-60">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr
                                        key={product?._id}
                                        className="border-t border-base-300 hover:bg-base-200/50 transition-colors"
                                    >
                                        {/* product Name */}
                                        <td className="h-[72px] px-4 py-2 text-base-content text-sm font-normal leading-normal">
                                            {product?.productName}
                                        </td>

                                        {/* category */}
                                        <td className="h-[72px] px-4 py-2 text-base-content/70 text-sm font-normal leading-normal">
                                            {product?.category}
                                        </td>

                                        {/* Price */}
                                        <td className="h-[72px] px-4 py-2 text-base-content/70 text-sm font-normal leading-normal">
                                            {product?.price}
                                        </td>

                                        {/* availability */}
                                        <td className="h-[72px] px-4 py-2 text-base-content/70 text-sm font-normal leading-normal">
                                            Available
                                        </td>

                                        {/* Actions */}
                                        <td className="h-[72px] px-4 py-2 text-base-content/70 text-sm font-bold leading-normal tracking-[0.015em]">
                                            <div className="flex gap-3">
                                                <Link
                                                    href={`/shop/${product._id}`}
                                                >
                                                    <button className="text-primary px-3 py-2 rounded-sm bg-blue-200 hover:text-primary-focus hover:cursor-pointer transition-colors">
                                                        View
                                                    </button>
                                                </Link>
                                                <span className="text-base-300"></span>
                                                <Link href={"/"}>
                                                    <button className=" px-3 py-2 rounded-sm bg-green-200  hover:cursor-pointer transition-colors">
                                                        Update
                                                    </button>
                                                </Link>

                                                <span className="text-base-300"></span>
                                                <button
                                                    onClick={() => {
                                                        handleDelete(
                                                            product._id
                                                        );
                                                    }}
                                                    className="text-error px-3 py-2 rounded-sm bg-red-200 hover:text-error-focus hover:cursor-pointer transition-colors"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
