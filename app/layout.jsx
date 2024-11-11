"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import JOS from "jos-animation";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/globals.css";
import "@/styles/vendors/menu.css";

const DMSans = localFont({
    src: "../fonts/DMSans-Bold.woff2",
    variable: "--font-DMSans",
});

const ClashDisplay = localFont({
    src: "../fonts/ClashDisplay-Medium.woff2",
    variable: "--font-clash-display",
});

const Raleway = localFont({
    src: "../fonts/Raleway-Bold.woff2",
    variable: "--font-raleway",
});

const SpaceGrotesk = localFont({
    src: "../fonts/SpaceGrotesk-Bold.woff2",
    variable: "--font-space-grotesk",
});

const googleTag = () => {
    return (
        <script>
            {(function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-P9ZDRGN9")}
        </script>
    );
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
    const pathname = usePathname();

    const jos_options = {
        passive: false,
        once: true,
        animation: "fade-up",
        timingFunction: "ease",
        threshold: 0,
        delay: 0.5,
        duration: 0.7,
        scrollDirection: "down",
        rootMargin: "0% 0% 15% 0%",
    };
    useEffect(() => {
        JOS.init(jos_options);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        JOS.refresh();
    }, [pathname]);

    return (
        <html lang="en">
            <head>
                <title>OneClick Stays - Perfect luxury stays in budget</title>
                <link rel="shortcut icon" href="favicon.png" type="image/png" />
                <googleTag />
            </head>
            <body className={`${DMSans.variable} ${ClashDisplay.variable} ${Raleway.variable} ${SpaceGrotesk.variable} ${inter.variable}`}>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-P9ZDRGN9"
                        height="0"
                        width="0"
                        style="display:none;visibility:hidden"
                    ></iframe>
                </noscript>
                {children}
            </body>
        </html>
    );
}
