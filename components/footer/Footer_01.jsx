import Image from "next/image";
import Link from "next/link";
import LogoDark from "../logo/LogoDark";

const Footer_01 = () => {
    return (
        <footer className="relative z-[1] bg-black text-white overflow-hidden rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[50px] lg:rounded-tr-[50px]">
            <div className="global-container">
                <div className="h-[1px] w-full bg-[#DBD6CF]" />
                <div className="lg grid grid-cols-1 gap-8 items-center py-[30px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto] xl:gap-20">
                    <div className="flex flex-col gap-y-6">
                        <LogoDark />
                        {/* <p>
                            Our mission is to harness the power of AI to solve
                            complex business challenges &amp; decision-makers
                            with data-driven insights, and enhance user
                            experiences across digital platforms.
                        </p> */}
                        {/* <p>
                            Website:
                            <Link href="https://www.example.com">
                                www.example.com
                            </Link>
                        </p> */}
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <ul className="flex flex-col gap-y-[10px] capitalize">
                            <li>
                                <Link href="/" className="transition-all duration-300 ease-linear hover:text-colorOrangyRed">
                                    Terms and Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <ul className="flex flex-col gap-y-[10px] capitalize">
                            <li>
                                <Link href="/" className="transition-all duration-300 ease-linear hover:text-colorOrangyRed">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-[#404040]" />

                {/* Footer Bottom */}
                <div className="py-9 text-center">
                    <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
                </div>
                {/* Footer Bottom */}
            </div>
            {/* Footer Background Shape 1  */}
            <div className="orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]"></div>
            {/* Footer Background Shape 2  */}
            <div className="orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]"></div>
        </footer>
    );
};

export default Footer_01;
