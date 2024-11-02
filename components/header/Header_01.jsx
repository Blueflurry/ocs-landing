"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../navbar/Navbar";
import LogoDark from "../logo/LogoDark";

const Header_01 = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <header className="site-header site-header--absolute is--white pt-10 pb-3" id="sticky-menu">
            <div className="global-container text-white">
                <div className="flex items-center justify-center lg:justify-between gap-x-8">
                    {/* Header Logo */}
                    <LogoDark />
                    {/* Header Logo */}
                    {/* Header Navigation */}
                    <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
                </div>
            </div>
        </header>
    );
};

export default Header_01;
