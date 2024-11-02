import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/img_placeholder/logo-white.svg";

const LogoDark = () => {
    return (
        <Link href="/">
            <Image src={logo} alt="OneClick Stays" height="42" className="ocs-logo" />
        </Link>
    );
};

export default LogoDark;
