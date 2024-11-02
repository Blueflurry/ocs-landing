import Link from "next/link";
import { useRef } from "react";

const LocationModal = ({ title, description, videoUrl, show, closeModal }) => {
    const videoRef = useRef(null);

    // if (show) {
    //     videoRef.current.play();
    // }

    return (
        <div className={`locationModal ${show ? "" : "hide"}`}>
            <span className="close" onClick={closeModal}>
                x
            </span>
            {videoUrl && (
                <div className="flex align-center flex-col">
                    <video muted autoPlay loop playsInline preload="none" controls ref={videoRef}>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Link
                        href={`https://wa.me/919899992197?text=Hi%20there!%20I%20am%20looking%20for%20a%20luxury%20stay%20in%20${title}`}
                        target="_blank"
                        className="mt-10 flex justify-center md:hidden button rounded-[50px] border-2 border-colorPrimaryGreen bg-colorPrimaryGreen px-14 py-4 text-black text-lg xl:text-xl after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black"
                    >
                        Find My Perfect Stay
                    </Link>
                    <div className="flex flax-wrap justify-center items-center mt-2 md:hidden">
                        <p className="text-white font-medium" style={{ marginLeft: -10 }}>
                            Powered by
                        </p>
                        <img src="/assets/images/whatsapp.svg" alt="whatsapp" className="scale-125 ml-2 mr-1" />
                        <p className="text-white text-sm font-semibold">Whatsapp</p>
                    </div>
                </div>
            )}
            <div className="text">
                <h2>{title}</h2>
                <p className="desc">{description}</p>
                <Link
                    href={`https://wa.me/919899992197?text=Hi%20there!%20I%20am%20looking%20for%20a%20luxury%20stay%20in%20${title}`}
                    target="_blank"
                    className="button rounded-[50px] border-2 border-colorPrimaryGreen bg-colorPrimaryGreen px-14 py-4 text-black text-lg xl:text-xl after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black hidden md:block"
                >
                    Find My Perfect Stay
                </Link>
                <div className="flex flax-wrap justify-center items-center mt-2 hidden md:flex">
                    <p className="text-white font-medium">Powered by</p>
                    <img src="/assets/images/whatsapp.svg" alt="whatsapp" className="scale-125 ml-2 mr-1" />
                    <p className="text-white text-sm font-semibold">Whatsapp</p>
                </div>
            </div>
        </div>
    );
};

export default LocationModal;
