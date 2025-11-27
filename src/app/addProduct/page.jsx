"use client";
import React, { use } from "react";
import { format } from "date-fns";
import AuthContext from "@/context/AuthContext";
import useAxios from "@/hooks/useAxios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const AddProduct = () => {
    const { user } = use(AuthContext);
    const axios = useAxios();
    const handleAddProduct = (e) => {
        e.preventDefault();

        const form = e.target;
        const now = new Date();
        const formattedNow = format(now, "yyyy-MM-dd'T'HH:mm:ssXXX");

        const newProduct = {
            productName: form.productName.value,
            ownerName: form.ownerName.value,
            ownerEmail: user?.email,
            category: form.category.value,
            price: parseFloat(form.price.value),
            shortDesription: form.shortDesription.value,
            description: form.description.value,
            productImage: form.productImage.value,
            createdAt: formattedNow,
            updatedAt: formattedNow,
            ratings: parseFloat((Math.random() * 4 + 1).toFixed(1)),
        };
        axios
            .post(`/products`, newProduct)
            .then((data) => {
                if (data.data.insertedId) {
                    Swal.fire({
                        title: "Added successfully!",
                        icon: "success",
                        draggable: true,
                    });
                }
                // console.log(data.data);
            })
            .catch((error) => {
                // console.log(error);
                Swal.fire({
                    title: `${error.message}`,
                    text: "That thing is still around?",
                    icon: "question",
                });
            });
    };
    return (
        <div className="max-w-[450px] mx-auto my-5 md:my-15">
            <h2 className="text-2xl text-center my-5">Add Your Product </h2>
            <form
                onSubmit={handleAddProduct}
                className="shadow-2xl p-8 rounded-lg"
            >
                <div className="w-full gap-0 md:gap-10 flex-col md:flex-row pt-3">
                    {/* Product Name */}
                    <label className=" block">
                        <p className="text-base-content text-base font-medium  pb-2">
                            Product Name
                        </p>
                        <input
                            type="text"
                            name="productName"
                            placeholder="Enter Product name"
                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                            required
                        />
                    </label>

                    {/* Owner Name */}
                    <label className="min-w-40 block">
                        <p className="text-base-content text-base font-medium  pb-2">
                            Owner Name
                        </p>
                        <input
                            type="text"
                            name="ownerName"
                            placeholder="Owner full name"
                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                            required
                        />
                    </label>

                    {/* Cover Image URL */}
                    <label className="min-w-40 block">
                        <p className="text-base-content text-base font-medium  pb-2">
                            Product Image URL
                        </p>
                        <input
                            type="url"
                            name="productImage"
                            placeholder="Enter image URL"
                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                            required
                        />
                    </label>

                    {/* Category */}
                    <label className="min-w-40 block">
                        <p className="text-base-content text-base font-medium  pb-2">
                            Category
                        </p>
                        <select
                            name="category"
                            className="select select-bordered w-full bg-base-100 text-base-content"
                            required
                        >
                            <option value="" disabled selected>
                                Select Product type
                            </option>
                            <option value="Mobile">Mobile</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Computer">Computer</option>
                            <option value="Earphone">Earphone</option>
                            <option value="HeadPhone">HeadPhone</option>
                            <option value="Camera">Camera</option>
                        </select>
                    </label>

                    {/* Price  */}
                    <label className="min-w-40 block">
                        <p className="text-base-content text-base font-medium  pb-2">
                            Price
                        </p>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter price per day"
                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                            min="0"
                            step="1"
                            required
                        />
                    </label>
                    {/* Description short*/}
                    <label className="min-w-40 block">
                        <p className="text-base-content text-base font-medium  pb-2">
                            Description (short)
                        </p>
                        <input
                            type="text"
                            name="shortDesription"
                            placeholder="shortDesription"
                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                            required
                        />
                    </label>

                    {/* Description long*/}
                    <label className="w-full block">
                        <p className="text-base-content text-base font-medium  pb-2">
                            Description (long)
                        </p>
                        <textarea
                            name="description"
                            placeholder="Enter Product description"
                            className="textarea textarea-bordered w-full bg-base-100 text-base-content placeholder-base-content/70 h-20"
                            required
                        />
                    </label>
                </div>

                <div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary text-primary-content tracking-[0.015em] w-full mt-4"
                    >
                        <span className="truncate">Add Product</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
