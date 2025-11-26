"use client";

import React, { useState } from "react";
const PRIMARY_COLOR = "#00C897";

const Contact = () => {
    const handleChange = (e) => {};

    const handleSubmit = (e) => {
        e.preventDefault();
        formData;
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans">
            {/* Custom Styles for Primary Color and Dark Mode Consistency */}

            <main className="flex flex-col gap-10 sm:gap-16 py-10 sm:py-16 max-w-7xl mx-auto">
                {/* Hero Section */}
                <section className="flex flex-wrap justify-between gap-6 px-4">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                            Get in Touch
                        </h1>
                        <p className="text-gray-500 dark:text-[#8dcebe] text-base font-normal leading-normal max-w-2xl">
                            Our team is here to help. We are committed to
                            responding to all inquiries quickly and efficiently,
                            typically within one business day.
                        </p>
                    </div>
                </section>

                {/* Live Support Indicator */}
                <section className="px-4">
                    <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6 rounded-lg bg-white dark:bg-[#17362e] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                        <div className="flex flex-col gap-2 flex-[2_2_0px]">
                            <p className="text-gray-500 dark:text-[#8dcebe] text-sm font-medium leading-normal">
                                Live Support Status
                            </p>
                            <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight">
                                Current Support Wait Time:{" "}
                                <span className="text-primary">
                                    5-10 Minutes
                                </span>
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="size-2 rounded-full bg-green-500"></div>
                                <p className="text-gray-500 dark:text-[#8dcebe] text-sm font-normal leading-normal">
                                    Low Volume
                                </p>
                            </div>
                        </div>
                        {/* Abstract image representing digital support channels (Placeholder Image) */}
                        <div className="rounded-lg min-h-[120px]">
                            <img
                                className="max-h-[250px] w-80 rounded-lg"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE--hv9VHoieQ7hdgh9xPg1ud0mtorPfyKqhFkY_fDp0zc5x8OLTcz2wEgq4mSJhPX7dXS5OEEVTkadpjG46PwABWEhJMKyXK17P4TctmSjlpZpt8swQfZ2J-SsKTfU__Ef1cOY2ED_s3KhPXGV65SMWLDBlz8Z8PddWqMuWtSRJX8wdyeVevNEGzIbt2b9MBOWSRQUcOAjIrh8Usi3OVBK7b27YJR4U1sDpz1W5bnZzHEtd9XgJ0LRvxDj5CmDsZfwWhqoBU_Y3g"
                                alt="digital"
                            />
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="px-4 flex flex-col gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
                        Send us a Message
                    </h2>
                    <div className="bg-white dark:bg-[#17362e] rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {/* Full Name */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-gray-800 dark:text-white text-sm font-medium leading-normal"
                                    htmlFor="fullName"
                                >
                                    Full Name
                                </label>
                                <input
                                    className="border border-gray-200 p-1 rounded-lg pl-2"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    type="text"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Email Address */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-gray-800 dark:text-white text-sm font-medium leading-normal"
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                                <input
                                    className="border border-gray-200 p-1 rounded-lg pl-2"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    type="email"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Subject */}
                            <div className="md:col-span-2 flex flex-col gap-2">
                                <label
                                    className="text-gray-800 dark:text-white text-sm font-medium leading-normal"
                                    htmlFor="subject"
                                >
                                    Subject
                                </label>
                                <select
                                    className="border border-gray-200 p-1 rounded-lg pl-2"
                                    id="subject"
                                    name="subject"
                                    onChange={handleChange}
                                >
                                    <option value="General Inquiry">
                                        General Inquiry
                                    </option>
                                    <option value="Listing Support">
                                        Listing Support
                                    </option>
                                    <option value="Technical Issue">
                                        Technical Issue
                                    </option>
                                    <option value="Account Help">
                                        Account Help
                                    </option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="md:col-span-2 flex flex-col gap-2">
                                <label
                                    className="text-gray-800 dark:text-white text-sm font-medium leading-normal"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="border border-gray-200 p-1 rounded-lg pl-2"
                                    id="message"
                                    name="message"
                                    placeholder="Please describe your issue in detail..."
                                    rows="5"
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="md:col-span-2">
                                <button
                                    className="flex w-full sm:w-auto max-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-base transition-colors"
                                    type="submit"
                                    style={{
                                        backgroundColor: PRIMARY_COLOR,
                                    }}
                                >
                                    <span className="truncate">
                                        Send Message
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Location & Map */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 items-center">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
                            Our Headquarters
                        </h2>
                        <p className="text-gray-500 dark:text-[#8dcebe]">
                            Come visit our team at our headquarters. We&apos;re
                            located in the heart of the city, ready to innovate
                            and support our users.
                        </p>
                        <div className="flex items-start gap-3 mt-2">
                            <LocationIcon className="text-primary mt-1 size-6" />
                            <p className="text-gray-700 dark:text-gray-300">
                                123 Tech Avenue
                                <br />
                                Innovation City, CA 94103
                                <br />
                                United States
                            </p>
                        </div>
                    </div>
                    {/* Map Placeholder Image */}
                    <div className="w-full h-80 rounded-xl bg-gray-200 dark:bg-gray-800 overflow-hidden">
                        <img
                            alt="Map showing the location of SparkCart headquarters."
                            className="w-full h-full object-cover opacity-80"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuPP7g5DqtE_xTAN7df9Ey4aFoBAJPIXjlv3dHCMIEgyV5uhJT8BsDUYw8k7RCKRdD-VIAMy9-tyw4uCrxFGTHW0iX_TbjmW7-YcbjU9o3DpSaNpFEPYX9K0j3Z7-JlepMvwM-aLp35vxGwTAKEa41r2dnoOWJGXBt6Y_F-PyH64FNl0w-FFTeHv6QNXb9OCCKpKUS1xvl-XOFu7CDyjE00GSoCa1hQXMtMPLbVR3bRkGPZIJflicm3futwEEpOq3JO_S-gOe2i_k"
                        />
                    </div>
                </section>

                {/* Alternative Channels */}
                <section className="px-4 flex flex-col gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
                        Other Ways to Reach Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Direct Phone */}
                        <div className="bg-white dark:bg-[#17362e] rounded-lg p-6 flex flex-col gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/20 dark:bg-primary/30 p-3 rounded-full">
                                    <PhoneIcon className="text-primary size-6" />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 dark:text-white font-bold">
                                        Direct Phone
                                    </h3>
                                    <a
                                        className="text-primary hover:underline"
                                        href="tel:+1-555-123-4567"
                                    >
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                            </div>
                            <p className="text-gray-500 dark:text-[#8dcebe] text-sm">
                                For urgent matters, feel free to give us a call
                                during business hours (9am - 5pm PT).
                            </p>
                        </div>

                        {/* High-Priority Email */}
                        <div className="bg-white dark:bg-[#17362e] rounded-lg p-6 flex flex-col gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/20 dark:bg-primary/30 p-3 rounded-full">
                                    <EmailIcon className="text-primary size-6" />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 dark:text-white font-bold">
                                        High-Priority Email
                                    </h3>
                                    <a
                                        className="text-primary hover:underline"
                                        href="mailto:priority@sparkcart.com"
                                    >
                                        priority@sparkcart.com
                                    </a>
                                </div>
                            </div>
                            <p className="text-gray-500 dark:text-[#8dcebe] text-sm">
                                For critical issues or partnership inquiries,
                                please use our high-priority email.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;

// SVG Icons (Replacing Material Symbols for single-file compliance)
const LocationIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);
const PhoneIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);
const EmailIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7" />
    </svg>
);
