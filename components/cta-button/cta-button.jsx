import Link from "next/link";

function CtaButton() {
    <Link
        href="https://wa.me/+919899992197?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        className="button rounded-[50px] border-2 border-colorPrimaryGreen bg-colorPrimaryGreen px-14 py-4 text-black text-xl  after:bg-white hover:border-white hover:text-black"
    >
        Find Your Perfect Stay
    </Link>;
}

export default CtaButton;
