"use client";
import React from "react";

// Define the custom accent color for consistency
const ACCENT_COLOR = "#00C897";

// Placeholder icons using inline SVG for a single-file component
const TechIcon = ({ children, className = "" }) => (
    <div
        className={`p-4 inline-flex items-center justify-center rounded-full bg-gray-800 ${className}`}
    >
        {children}
    </div>
);

// SVG Icons (Simplified versions of Lucide icons)
const MobileIcon = () => (
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
    >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
    </svg>
);
const LaptopIcon = () => (
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
    >
        <rect width="20" height="12" x="2" y="6" rx="2" ry="2" />
        <line x1="2" x2="22" y1="18" y2="18" />
    </svg>
);
const HeadphoneIcon = () => (
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
    >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1z" />
    </svg>
);
const GamepadIcon = () => (
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
    >
        <path d="M6 12h4" />
        <path d="M8 10v4" />
        <path d="M15 13h1" />
        <path d="M15 11h1" />
        <rect width="20" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
);
const QualityIcon = () => (
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
    >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);
const TransparencyIcon = () => (
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
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    </svg>
);
const CommunityIcon = () => (
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
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);
const InnovationIcon = () => (
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
    >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
);

const page = () => {
    const ValuesCard = ({ title, description, Icon }) => (
        <div className="flex flex-col items-start p-6 bg-gray-900 border border-gray-700/50 rounded-xl shadow-xl hover:shadow-[0_0_20px_0px_#00C89744] transition duration-300">
            <TechIcon
                className="text-white mb-4 bg-opacity-10"
                style={{ color: ACCENT_COLOR }}
            >
                <Icon size={24} />
            </TechIcon>
            <h3
                className="text-xl font-bold mb-2"
                style={{ color: ACCENT_COLOR }}
            >
                {title}
            </h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );

    const ProductCategory = ({ name, Icon }) => (
        <div className="flex flex-col min-w-56 items-center justify-center p-4 sm:p-6 bg-gray-800 rounded-xl transition duration-300 hover:bg-gray-700/50 hover:shadow-xl">
            <TechIcon
                className="text-white mb-2"
                style={{ color: ACCENT_COLOR }}
            >
                <Icon size={32} />
            </TechIcon>
            <p className="text-sm font-medium text-gray-300 mt-2">{name}</p>
        </div>
    );

    return (
        <div className="min-h-screen  font-sans text-white">
            {/* Tailwind Style Configuration (Simulated for custom color) */}
            <style jsx global>{`
                .text-accent {
                    color: ${ACCENT_COLOR};
                }
                .border-accent {
                    border-color: ${ACCENT_COLOR};
                }
                .bg-accent {
                    background-color: ${ACCENT_COLOR};
                }
                .shadow-accent-light {
                    box-shadow: 0 0 20px 0px ${ACCENT_COLOR}44;
                }
                /* Custom circuit pattern background placeholder */
                .circuit-bg {
                    background-image: radial-gradient(
                            rgba(255, 255, 255, 0.05) 1px,
                            transparent 1px
                        ),
                        radial-gradient(
                            rgba(255, 255, 255, 0.05) 1px,
                            transparent 1px
                        );
                    background-size: 40px 40px;
                    background-position: 0 0, 20px 20px;
                }
            `}</style>

            <main className="container mx-auto px-4 py-12 sm:py-20 max-w-7xl">
                {/* 1. Hero Statement */}
                <header className="relative py-24 md:py-32 overflow-hidden rounded-3xl mb-16 circuit-bg bg-gray-800 border border-gray-700/50">
                    <div className="text-center z-10 p-4">
                        <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                            Our Circuit: The SparkCart Story
                        </h1>
                        <p className="mt-4 text-2xl font-light text-gray-300">
                            Connecting You to Tomorrow&apos;s Tech, Today.
                        </p>
                    </div>
                </header>
                {/* 2. Mission & Vision */}
                <section className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
                    <div className="p-6 md:p-10 bg-gray-800 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-bold mb-4 border-b pb-2 border-gray-700">
                            Our Mission
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            To be the most trusted, transparent, and efficient
                            platform for managing and transacting pre-owned and
                            new high-value electronics. We simplify complexity
                            and guarantee security.
                        </p>
                    </div>
                    <div className="p-6 md:p-10 bg-gray-800 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-bold mb-4 border-b pb-2 border-gray-700">
                            Our Vision
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            To reduce global e-waste by fostering a thriving
                            circular economy, making high-quality technology
                            accessible and affordable for every user,
                            everywhere.
                        </p>
                    </div>
                </section>

                {/* 3. Product Focus */}
                <section className="mb-20">
                    <h2 className="text-4xl font-extrabold text-center mb-10 tracking-tight text-gray-950">
                        What We Power
                    </h2>
                    <div className="flex justify-center items-center">
                        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                            <ProductCategory name="Mobiles" Icon={MobileIcon} />
                            <ProductCategory name="Laptops" Icon={LaptopIcon} />
                            <ProductCategory
                                name="Headphones"
                                Icon={HeadphoneIcon}
                            />
                            <ProductCategory
                                name="Gaming Consoles"
                                Icon={GamepadIcon}
                            />
                        </div>
                    </div>
                </section>

                {/* 4. Values Section */}
                <section>
                    <h2 className="text-4xl font-extrabold tracking-tight text-center mb-12 text-gray-800">
                        Our Core Values
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ValuesCard
                            title="Quality"
                            description="Ensuring every product listed meets rigorous performance and aesthetic criteria before transaction."
                            Icon={QualityIcon}
                        />
                        <ValuesCard
                            title="Transparency"
                            description="Providing complete, verifiable history and honest pricing, fostering total trust between users."
                            Icon={TransparencyIcon}
                        />
                        <ValuesCard
                            title="Community"
                            description="Building a global network of users who value technology and sustainable consumption."
                            Icon={CommunityIcon}
                        />
                        <ValuesCard
                            title="Innovation"
                            description="Constantly improving our platform features to make tech management seamless and intuitive."
                            Icon={InnovationIcon}
                        />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default page;
