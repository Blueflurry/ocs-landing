import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";
import { LOCATIONS, WHATSAPPLINK } from "@/data/dummy";

function Portfolio() {
    return (
        <>
            <Header_01 />
            <main className="main-wrapper relative overflow-hidden">
                {/*...::: Breadcrumb Section Start :::... */}
                <section id="section-breadcrumb">
                    <div className="breadcrumb-wrapper bg-black text-white">
                        <div className="global-container">
                            <div className="breadcrumb-block">
                                <h1 className="breadcrumb-title">
                                    Our Portfolio
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/*...::: Breadcrumb Section End :::... */}
                {/*...::: Portfolio Section Start :::... */}
                <section id="portfolio-section">
                    {/* Section Spacer */}
                    <div className="pb-40 xl:pb-[220px]">
                        {/* Section Container */}
                        <div className="global-container">
                            {/* Section Content Block */}
                            {/* <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                                <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]">
                                    <h2>Our Portfolio</h2>
                                </div>
                            </div> */}
                            {/* Section Content Block */}
                            {/* Portfolio List */}
                            <ul className="col-1 gap-6 md:columns-2">
                                {/* Portfolio Item */}
                                <li
                                    className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                                    data-jos_delay="0.1"
                                >
                                    <div className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]">
                                        <Image
                                            src={LOCATIONS[0].locationImgSrc}
                                            alt="portfolio-img-1"
                                            width={636}
                                            height={550}
                                            className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-colorOrangyRed lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl">
                                        <span className="flex-1">
                                            {LOCATIONS[0].stayName +
                                                ", " +
                                                LOCATIONS[0].locationName}
                                        </span>
                                    </div>
                                </li>
                                {/* Portfolio Item */}
                                {/* Portfolio Item */}
                                <li
                                    className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                                    data-jos_delay="0.2"
                                >
                                    <div className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]">
                                        <Image
                                            src={LOCATIONS[1].locationImgSrc}
                                            alt="portfolio-img-2"
                                            width={636}
                                            height={550}
                                            className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-colorOrangyRed lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl">
                                        <span className="flex-1">
                                            {LOCATIONS[1].stayName +
                                                ", " +
                                                LOCATIONS[1].locationName}
                                        </span>
                                        {/* <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                                            <Image
                                                src="/assets/img_placeholder/th-1/icon-black-long-arrow-right.svg"
                                                alt="icon-black-long-arrow-right.svg"
                                                width={45}
                                                height={45}
                                            />
                                        </div> */}
                                    </div>
                                </li>
                                {/* Portfolio Item */}
                                {/* Portfolio Item */}
                                <li
                                    className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                                    data-jos_delay="0.3"
                                >
                                    <div className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]">
                                        <Image
                                            src={LOCATIONS[2].locationImgSrc}
                                            alt="portfolio-img-3"
                                            width={636}
                                            height={550}
                                            className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-colorOrangyRed lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl">
                                        <span className="flex-1">
                                            {LOCATIONS[2].stayName +
                                                ", " +
                                                LOCATIONS[2].locationName}
                                        </span>
                                        {/* <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                                            <Image
                                                src="/assets/img_placeholder/th-1/icon-black-long-arrow-right.svg"
                                                alt="icon-black-long-arrow-right.svg"
                                                width={45}
                                                height={45}
                                            />
                                        </div> */}
                                    </div>
                                </li>
                                {/* Portfolio Item */}
                                {/* Portfolio Item */}
                                <li
                                    className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                                    data-jos_delay="0.4"
                                >
                                    <div className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]">
                                        <Image
                                            src={LOCATIONS[3].locationImgSrc}
                                            alt="portfolio-img-4"
                                            width={636}
                                            height={550}
                                            className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-colorOrangyRed lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl">
                                        <span className="flex-1">
                                            {LOCATIONS[3].stayName +
                                                ", " +
                                                LOCATIONS[3].locationName}
                                        </span>
                                        {/* <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                                            <Image
                                                src="/assets/img_placeholder/th-1/icon-black-long-arrow-right.svg"
                                                alt="icon-black-long-arrow-right.svg"
                                                width={45}
                                                height={45}
                                            />
                                        </div> */}
                                    </div>
                                </li>
                                {/* Portfolio Item */}
                                {/* Portfolio Item */}
                                <li
                                    className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                                    data-jos_delay="0.5"
                                >
                                    <div className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]">
                                        <Image
                                            src={LOCATIONS[4].locationImgSrc}
                                            alt="portfolio-img-5"
                                            width={636}
                                            height={550}
                                            className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-colorOrangyRed lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl">
                                        <span className="flex-1">
                                            {LOCATIONS[4].stayName +
                                                ", " +
                                                LOCATIONS[4].locationName}
                                        </span>
                                        {/* <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                                            <Image
                                                src="/assets/img_placeholder/th-1/icon-black-long-arrow-right.svg"
                                                alt="icon-black-long-arrow-right.svg"
                                                width={45}
                                                height={45}
                                            />
                                        </div> */}
                                    </div>
                                </li>
                                {/* Portfolio Item */}
                                {/* Portfolio Item */}
                                <li
                                    className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                                    data-jos_delay="0.6"
                                >
                                    <div className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]">
                                        <Image
                                            src={LOCATIONS[5].locationImgSrc}
                                            alt="portfolio-img-6"
                                            width={636}
                                            height={550}
                                            className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-colorOrangyRed lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl">
                                        <span className="flex-1">
                                            {LOCATIONS[5].stayName +
                                                ", " +
                                                LOCATIONS[5].locationName}
                                        </span>
                                        {/* <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                                            <Image
                                                src="/assets/img_placeholder/th-1/icon-black-long-arrow-right.svg"
                                                alt="icon-black-long-arrow-right.svg"
                                                width={45}
                                                height={45}
                                            />
                                        </div> */}
                                    </div>
                                </li>
                                {/* Portfolio Item */}
                            </ul>
                            {/* Portfolio List */}
                        </div>
                        {/* Section Container */}
                    </div>
                    {/* Section Spacer */}
                </section>
                {/*...::: Portfolio Section End :::... */}
            </main>
            <Footer_01 />
        </>
    );
}

export default Portfolio;
