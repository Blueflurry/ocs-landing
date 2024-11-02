"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAccordion from "@/components/hooks/useAccordion";
import useTabs from "@/components/hooks/useTabs";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import VideoComponent from "@/components/videoComponent/VideoComponent";
import { LOCATIONS, TESTIMONIALS, WHATSAPPLINK } from "@/data/dummy";
import ProgressBar from "@/components/progressBar/progressBar";

function Home() {
    const [activeIndex, handleAccordion] = useAccordion(0);

    const [activeTab, handleTab] = useTabs();

    const showStays = (videoSrc) => () => {};

    return (
        <div className="page-wrapper relative z-[1] bg-white">
            {/*...::: Header Start :::... */}
            <Header_01 />
            {/*...::: Header End :::... */}
            <main className="main-wrapper relative overflow-hidden">
                {/*...::: Hero Section Start :::... */}
                <section id="section-hero">
                    <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-black pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]">
                        <div className="global-container">
                            <div className="mb-14 flex flex-col items-center text-center lg:mb-20">
                                <h1 className="jos slide-from-bottom mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px] text-white">
                                    Book premium Villas & Apartments for a perfect luxury escape
                                </h1>
                                <p className="jos slide-from-bottom mb-11 max-w-[700px] text-lg  sm:text-xl xl:max-w-[980px] text-gray-500">
                                    Hand-picked Villas and Apartments in Goa, Bali, Thailand, Spain and Himachal.
                                </p>
                                <div className="jos flex flex-wrap justify-center gap-6 mb-2" data-jos_animation="fade">
                                    <Link
                                        href={WHATSAPPLINK}
                                        target="_blank"
                                        className="button rounded-[50px] border-2 border-colorPrimaryGreen bg-colorPrimaryGreen px-14 py-4 text-black text-xl after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black"
                                    >
                                        Find Your Perfect Stay
                                    </Link>
                                </div>
                                <div className="flex flax-wrap justify-center items-center	">
                                    <p className="text-white font-medium">Powered by</p>
                                    <img src="/assets/images/whatsapp.svg" alt="whatsapp" className="scale-125 ml-2 mr-1" />
                                    <p className="text-white text-sm font-semibold">Whatsapp</p>
                                </div>
                            </div>

                            {/* promo video */}
                            <div className="jos hero-img overflow-hidden rounded-2xl bg-black" data-jos_animation="zoom">
                                <VideoComponent src="/videos/demo.mp4" />
                            </div>

                            {/* <div className="my-10 h-[1px] w-full bg-[#DBD6CF] colorWhite lg:my-16 xl:my-20"></div> */}
                        </div>
                        <div className="orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] rounded-[500px]"></div>

                        {/* <div className="orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] rounded-[450px]"></div> */}
                    </div>
                </section>
                {/*...::: Hero Section End :::... */}

                {/*...::: Service Section Start :::... */}
                <section id="section-service">
                    {/* Section Spacer */}
                    <div id="why-us">
                        <div className="pb-20 pt-20 xl:pb-[80px] xl:pt-[120px]">
                            {/* Section Container */}
                            <div className="global-container">
                                {/* Section Content Block */}
                                <div className="jos mb-10 lg:mb-16 xl:mb-20">
                                    <h2 className="mb-2 text-center font-light">4 Key Benefits</h2>
                                    <h4 className="text-center">of booking with OneClick Stays</h4>
                                </div>
                                {/* Section Content Block */}
                                {/* Service List */}
                                <ul className="jos grid grid-cols-1 gap-4 overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
                                    {/* Service Item */}
                                    <li className="group bg-gray-50 rounded-[10px] text-center flex flex-col items-center p-[30px] transition-all duration-300 ease-in-out">
                                        <div className="relative mb-9 h-[70px] w-[70px] mt-5">
                                            <Image src="/assets/images/service-icon-1.svg" alt="" width="70" height="70" />
                                            <Image
                                                src="/assets/images/service-icon-1.svg"
                                                alt="service-icon-orange-1"
                                                width="70"
                                                height="70"
                                                className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                                            />
                                        </div>
                                        <h3 className="mb-4 block text-2xl leading-tight -tracking-[0.5px]">100% Refund</h3>

                                        <p className="mb-4 duration-300 xl:text-[16px]">
                                            We ensure full refund on all your bookings if you cancel 30 days before the stay.
                                        </p>

                                        {/* <Link
                                        href="/service-details"
                                        className="relative inline-block h-[30px] w-[30px] duration-300"
                                    >
                                        <Image
                                            src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                                            alt="arrow-right-black"
                                            width="30"
                                            height="30"
                                        />
                                        <Image
                                            src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                                            alt="arrow-right-black"
                                            width="30"
                                            height="30"
                                            className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                                        />
                                    </Link> */}
                                    </li>
                                    {/* Service Item */}
                                    {/* Service Item */}
                                    <li className="group bg-gray-50 rounded-[10px] text-center flex flex-col items-center p-[30px] transition-all duration-300 ease-in-out">
                                        <div className="relative mb-9 h-[70px] w-[70px] mt-5">
                                            <Image src="/assets/images/service-icon-2.svg" alt="service-icon-black-2" width="70" height="70" />
                                            <Image
                                                src="/assets/images/service-icon-2.svg"
                                                alt="service-icon-orange-1"
                                                width="70"
                                                height="70"
                                                className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                                            />
                                        </div>

                                        <h3 className="mb-4 block text-2xl leading-tight -tracking-[0.5px]">Stay Manager</h3>

                                        <p className="mb-4 duration-300 xl:text-[16px]">
                                            We assign a dedicated Stay Manager who is available 24/7 to ensure your smooth experience.
                                        </p>

                                        {/* <Link
                                        href="/service-details"
                                        className="relative inline-block h-[30px] w-[30px] duration-300"
                                    >
                                        <Image
                                            src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                                            alt="arrow-right-black"
                                            width="30"
                                            height="30"
                                        />
                                        <Image
                                            src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                                            alt="arrow-right-black"
                                            width="30"
                                            height="30"
                                            className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                                        />
                                    </Link> */}
                                        {/* Features Item */}
                                        {/* Features Item */}
                                    </li>
                                    {/* Service Item */}
                                    {/* Service Item */}
                                    <li className="group bg-gray-50 rounded-[10px] text-center flex flex-col items-center p-[30px] transition-all duration-300 ease-in-out">
                                        <div className="relative mb-9 h-[70px] w-[70px] mt-5">
                                            <Image src="/assets/images/service-icon-3.svg" alt="service-icon-black-3" width="70" height="70" />
                                            <Image
                                                src="/assets/images/service-icon-3.svg"
                                                alt="service-icon-orange-3"
                                                width="70"
                                                height="70"
                                                className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                                            />
                                        </div>
                                        <h3 className="mb-4 block text-2xl leading-tight -tracking-[0.5px]">Security & Privacy</h3>

                                        <p className="mb-4 duration-300 xl:text-[16px]">
                                            All of our stays comes with rigorous security measures so your loved ones stay safe.
                                        </p>

                                        {/* <Link
                                        href="/service-details"
                                        className="relative inline-block h-[30px] w-[30px] duration-300"
                                    >
                                        <Image
                                            src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                                            alt="arrow-right-black"
                                            width="30"
                                            height="30"
                                        />
                                        <Image
                                            src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                                            alt="arrow-right-black"
                                            width="30"
                                            height="30"
                                            className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                                        />
                                    </Link> */}
                                    </li>
                                    {/* Service Item */}
                                    {/* Service Item */}
                                    <li className="group bg-gray-50 rounded-[10px] text-center flex flex-col items-center p-[30px] transition-all duration-300 ease-in-out">
                                        <div className="relative mb-9 h-[70px] w-[70px] mt-5">
                                            <Image src="/assets/images/service-icon-4.svg" alt="service-icon-black-4" width="70" height="70" />
                                            <Image
                                                src="/assets/images/service-icon-4.svg"
                                                alt="service-icon-orange-4"
                                                width="70"
                                                height="70"
                                                className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                                            />
                                        </div>
                                        <h3 className="mb-4 block text-2xl leading-tight -tracking-[0.5px]">High Standards</h3>

                                        <p className="mb-4 duration-300 xl:text-[16px]">
                                            We follow a strict filtering process to make sure only the best of the stays reaches to you.
                                        </p>

                                        {/* <Link
                                        href="/service-details"
                                        className="relative inline-block h-[30px] w-[30px] duration-300"
                                    >
                                        <Image
                                            src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                                            alt="arrow-right-black"
                                            width="30"
                                            height="30"
                                        />
                                        <Image
                                            src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                                            alt="arrow-right-black"
                                            width="30"
                                            height="30"
                                            className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                                        />
                                    </Link> */}
                                    </li>
                                    {/* Service Item */}
                                </ul>
                                {/* Service List */}
                            </div>

                            {/* Section Container */}
                        </div>
                    </div>
                    {/* Section Spacer */}
                </section>
                {/*...::: Service Section End :::... */}

                {/*...::: CTA & Brand Partners Section Start :::... */}
                <section id="section-service">
                    {/* Section Spacer */}
                    <div className="pb-20">
                        {/* Section Container */}
                        <div className="global-container">
                            {/* CTA */}
                            <div className="jos flex flex-wrap justify-center gap-6 mb-2" data-jos_animation="fade">
                                <Link
                                    href={WHATSAPPLINK}
                                    target="_blank"
                                    className="button rounded-[50px] border-2 border-colorPrimaryGreen bg-colorPrimaryGreen px-14 py-4 text-black text-xl after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black"
                                >
                                    Find Your Perfect Stay
                                </Link>
                            </div>
                            <div className="flex flax-wrap justify-center items-center	">
                                <p className="font-medium">Powered by</p>
                                <img src="/assets/images/whatsapp.svg" alt="whatsapp" className="scale-125 ml-2 mr-1" />
                                <p className=" text-sm font-semibold">Whatsapp</p>
                            </div>
                            {/* CTA */}
                        </div>
                    </div>
                </section>
                <div className="h-[1px] w-full bg-[#f5f5f5]" />

                <section id="section-service">
                    {/* Section Spacer */}
                    <div className="">
                        {/* Section Container */}
                        <div className="global-container">
                            {/* Brand Partners */}
                            <div className="pb-20 pt-20 xl:pb-[120px]">
                                <div className="jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16">
                                    <p className="text-3xl">We are partnered with the biggest</p>
                                    <p className="text-3xl">brands in Luxury Stays</p>
                                </div>

                                <div className="jos brand-slider" data-jos_animation="fade">
                                    <Swiper
                                        slidesPerView={2}
                                        spaceBetween={105}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[Autoplay]}
                                        breakpoints={{
                                            768: {
                                                slidesPerView: 3,
                                            },
                                            992: {
                                                slidesPerView: 4,
                                            },
                                            1200: {
                                                slidesPerView: 5,
                                            },
                                        }}
                                    >
                                        <SwiperSlide>
                                            <Image src="/assets/images/brand-1.svg" alt="brand-1" width="180" height="38" className="max-w-full" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src="/assets/images/brand-2.svg" alt="brand-2" width="183" height="35" className="max-w-full" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src="/assets/images/brand-1.svg" alt="brand-3" width="172" height="35" className="max-w-full" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src="/assets/images/brand-2.svg" alt="brand-4" width="175" height="30" className="max-w-full" />
                                        </SwiperSlide>
                                        {/* <SwiperSlide>
                                        <Image
                                            src="/assets/images/brand-5.svg"
                                            alt="brand-5"
                                            width="168"
                                            height="36"
                                            className="max-w-full"
                                        />
                                    </SwiperSlide> */}
                                        <SwiperSlide>
                                            <Image src="/assets/images/brand-1.svg" alt="brand-1" width="180" height="38" className="max-w-full" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src="/assets/images/brand-2.svg" alt="brand-2" width="183" height="35" className="max-w-full" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src="/assets/images/brand-1.svg" alt="brand-3" width="172" height="35" className="max-w-full" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src="/assets/images/brand-2.svg" alt="brand-4" width="175" height="30" className="max-w-full" />
                                        </SwiperSlide>
                                        {/* <SwiperSlide>
                                        <Image
                                            src="/assets/images/brand-5.svg"
                                            alt="brand-5"
                                            width="168"
                                            height="36"
                                            className="max-w-full"
                                        />
                                    </SwiperSlide> */}
                                    </Swiper>
                                </div>
                            </div>
                            {/* Brand Partners */}
                        </div>

                        {/* Section Container */}
                    </div>
                    {/* Section Spacer */}
                </section>
                {/*...::: CTA & Brand Partners Section End :::... */}

                {/*...::: Hot Locations Section Start :::... */}
                <section id="team-section">
                    {/* Section Spacer */}
                    <div id="locations">
                        <div className="bg-black pt-20 pb-20 xl:pb-[100px]">
                            {/* Section Container */}
                            <div className="global-container">
                                {/* Section Content Block */}
                                <div className="jos mt-10 mb-10 text-center lg:mb-16 xl:mb-20">
                                    <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]">
                                        <h2 className="mb-2 text-center font-light text-white">Hot Locations</h2>
                                        <h4 className="text-center text-gray-500">See our popular Stays</h4>
                                    </div>
                                </div>
                                {/* Section Content Block */}
                                {/* Hot Location List */}
                                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {/* Hot Location Item 1 */}
                                    {LOCATIONS.map((item, index) => (
                                        <li key={"li" + index} className="jos rounded-[20px] p-[20px]" data-jos_animation="flip" data-jos_delay="0.1">
                                            <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                                                <Image
                                                    src={item.locationImgSrc}
                                                    alt="location-img-1"
                                                    width={376}
                                                    height={400}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div className="mt-5 flex flex-col items-center">
                                                <div className="font-dmSans text-[26px] text-white xxl:text-[30px]">{item.locationName}</div>
                                                <div className="mt-1 flex flex-col items-center gap-4">
                                                    <span className="text-[18px] text-gray-400">{item.spotsCovered}</span>
                                                    {/* <span>🔥 {item.staysBooked} Stays booked today!</span> */}
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontWeight: "600",
                                                            color: item.progressColor,
                                                            fontSize: "1rem",
                                                        }}
                                                    >
                                                        {item.status}
                                                    </span>
                                                    <ProgressBar color={item.progressColor} progress={item.progress} />
                                                </div>
                                                {item.staysBooked >= item.moreStaysAvailable ? (
                                                    <button
                                                        disabled={true}
                                                        className="button rounded-[50px] border-0 px-20 py-4 mt-4 text-white bg-[#1A1A1A] text-xl"
                                                    >
                                                        SOLD OUT
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={showStays(item.locationVideoSrc)}
                                                        className="button rounded-[50px] border-0 px-20 py-4 mt-4 text-black bg-white text-xl after:bg-colorOrangyRed hover:text-black"
                                                    >
                                                        View {item.moreStaysAvailable}+ Options
                                                    </button>
                                                )}
                                            </div>
                                        </li>
                                    ))}

                                    {/* Hot Location Item */}
                                    {/* Hot Location Item */}
                                    {/* <li
                                    className="jos rounded-[20px] p-[20px]"
                                    data-jos_animation="flip"
                                    data-jos_delay="0.2"
                                >
                                    <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                                        <Image
                                            src="/assets/images/location-2.svg"
                                            alt="location-img-2"
                                            width={376}
                                            height={400}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="mt-5 flex flex-col items-center">
                                        <div className="font-dmSans text-[26px] hover:text-colorOrangyRed xxl:text-[30px]">
                                            Willium Robert
                                        </div>
                                        <div className="mt-3 flex flex-col items-center gap-1">
                                            <span className="text-[21px]">
                                                Uluwatu, Ubud, Nusa Penida, +15
                                            </span>
                                            <span>
                                                🔥 30 Stays booked today!
                                            </span>
                                        </div>
                                        <Link
                                            href="/portfolio"
                                            className="button rounded-[50px] border-2 px-20 py-4 mt-4 text-black text-xl  after:bg-black hover:bg-black hover:text-white"
                                        >
                                            View 240+ Stays
                                        </Link>
                                    </div>
                                </li> */}
                                    {/* Hot Location Item */}
                                    {/* Hot Location Item */}
                                    {/* <li
                                    className="jos rounded-[20px] p-[20px]"
                                    data-jos_animation="flip"
                                    data-jos_delay="0.3"
                                >
                                    <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                                        <Image
                                            src="/assets/images/location-3.svg"
                                            alt="location-img-3"
                                            width={376}
                                            height={400}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="mt-5 flex flex-col items-center">
                                        <div className="font-dmSans text-[26px] hover:text-colorOrangyRed xxl:text-[30px]">
                                            Henry Fayol
                                        </div>
                                        <div className="mt-3 flex flex-col items-center gap-1">
                                            <span className="text-[21px]">
                                                Uluwatu, Ubud, Nusa Penida, +15
                                            </span>
                                            <span>
                                                🔥 30 Stays booked today!
                                            </span>
                                        </div>
                                        <Link
                                            href="/portfolio"
                                            className="button rounded-[50px] border-2 px-20 py-4 mt-4 text-black text-xl  after:bg-black hover:bg-black hover:text-white"
                                        >
                                            View 240+ Stays
                                        </Link>
                                    </div>
                                </li> */}
                                    {/* Hot Location Item */}
                                    {/* Hot Location Item */}
                                    {/* <li
                                    className="jos rounded-[20px] p-[20px]"
                                    data-jos_animation="flip"
                                    data-jos_delay="0.4"
                                >
                                    <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                                        <Image
                                            src="/assets/images/location-4.svg"
                                            alt="location-img-4"
                                            width={376}
                                            height={400}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="mt-5 flex flex-col items-center">
                                        <div className="font-dmSans text-[26px] hover:text-colorOrangyRed xxl:text-[30px]">
                                            Henry Martine
                                        </div>
                                        <div className="mt-3 flex flex-col items-center gap-1">
                                            <span className="text-[21px]">
                                                Uluwatu, Ubud, Nusa Penida, +15
                                            </span>
                                            <span>
                                                🔥 30 Stays booked today!
                                            </span>
                                        </div>
                                        <Link
                                            href="/portfolio"
                                            className="button rounded-[50px] border-2 px-20 py-4 mt-4 text-black text-xl  after:bg-black hover:bg-black hover:text-white"
                                        >
                                            View 240+ Stays
                                        </Link>
                                    </div>
                                </li> */}
                                    {/* Hot Location Item */}
                                    {/* Hot Location Item */}
                                    {/* <li
                                    className="jos rounded-[20px] p-[20px]"
                                    data-jos_animation="flip"
                                    data-jos_delay="0.5"
                                >
                                    <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                                        <Image
                                            src="/assets/images/location-5.svg"
                                            alt="location-img-5"
                                            width={376}
                                            height={400}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="mt-5 flex flex-col items-center">
                                        <div className="font-dmSans text-[26px] hover:text-colorOrangyRed xxl:text-[30px]">
                                            Jack Fox
                                        </div>
                                        <div className="mt-3 flex flex-col items-center gap-1">
                                            <span className="text-[21px]">
                                                Uluwatu, Ubud, Nusa Penida, +15
                                            </span>
                                            <span>
                                                🔥 30 Stays booked today!
                                            </span>
                                        </div>
                                        <Link
                                            href="/portfolio"
                                            className="button rounded-[50px] border-2 px-20 py-4 mt-4 text-black text-xl  after:bg-black hover:bg-black hover:text-white"
                                        >
                                            View 240+ Stays
                                        </Link>
                                    </div>
                                </li> */}
                                    {/* Hot Location Item */}
                                    {/* Hot Location Item */}
                                    {/* <li
                                    className="jos rounded-[20px] p-[20px]"
                                    data-jos_animation="flip"
                                    data-jos_delay="0.5"
                                >
                                    <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                                        <Image
                                            src="/assets/images/location-1.svg"
                                            alt="location-img-6"
                                            width={376}
                                            height={400}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="mt-5 flex flex-col items-center">
                                        <div className="font-dmSans text-[26px] hover:text-colorOrangyRed xxl:text-[30px]">
                                            Jack Fox
                                        </div>
                                        <div className="mt-3 flex flex-col items-center gap-1">
                                            <span className="text-[21px]">
                                                Uluwatu, Ubud, Nusa Penida, +15
                                            </span>
                                            <span>
                                                🔥 30 Stays booked today!
                                            </span>
                                        </div>
                                        <Link
                                            href="/portfolio"
                                            className="button rounded-[50px] border-2 px-20 py-4 mt-4 text-black text-xl  after:bg-black hover:bg-black hover:text-white"
                                        >
                                            View 240+ Stays
                                        </Link>
                                    </div>
                                </li> */}
                                    {/* Hot Location Item */}
                                </ul>
                                {/* Hot Location List */}
                                <div className="jos flex flex-wrap justify-center gap-6 mb-2 mt-20" data-jos_animation="fade">
                                    <Link
                                        href={WHATSAPPLINK}
                                        target="_blank"
                                        className="button rounded-[50px] border-2 border-colorPrimaryGreen bg-colorPrimaryGreen px-14 py-4 text-black text-xl after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black"
                                    >
                                        Find Your Perfect Stay
                                    </Link>
                                </div>
                                <div className="flex flax-wrap justify-center items-center	">
                                    <p className="font-medium text-white">Powered by</p>
                                    <img src="/assets/images/whatsapp.svg" alt="whatsapp" className="scale-125 ml-2 mr-1" />
                                    <p className=" text-sm font-semibold text-white">Whatsapp</p>
                                </div>
                            </div>
                            {/* Section Container */}
                        </div>
                    </div>
                    {/* Section Spacer */}
                </section>
                {/*...::: Hot Locations Section End :::... */}

                {/*...::: Testimonial Section Start :::... */}
                <section className="testimonial-section">
                    {/* Section Spacer */}
                    <div id="reviews">
                        <div className="pb-20 pt-20">
                            {/* Section Container */}
                            <div className="global-container">
                                {/* Section Content Block */}
                                <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                                    <div className="mx-auto max-w-[300px] lg:max-w-[600px] xl:max-w-[680px]">
                                        <h2 className="">Reviews</h2>
                                        <h4 className="text-center">of more than 50k+ customers</h4>
                                    </div>
                                </div>
                                {/* Section Content Block */}

                                {/* Testimonial List */}
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {/* Testimonial Item */}
                                    {TESTIMONIALS.map((item, index) => (
                                        <div
                                            key={"review" + index}
                                            className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px]"
                                            data-jos_animation="fade-left"
                                            data-jos_delay="0.1"
                                        >
                                            <div className="block">
                                                <Image src="/assets/img_placeholder/th-1/rating.svg" alt="rating" width="146" height="25" />
                                            </div>
                                            <p>“{item.review}”</p>
                                            <div className="flex items-center gap-x-4">
                                                <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                                                    <Image
                                                        src="/assets/img_placeholder/th-1/testimonial-img-1.jpg"
                                                        alt="testimonial-img"
                                                        width="60"
                                                        height="60"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-y-1">
                                                    <span className="block text-lg font-semibold leading-[1.6]">{item.customerName}</span>
                                                    <span className="block text-sm font-light leading-[1.4]">{item.reviewDate}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Testimonial Item */}
                                </div>
                                {/* Testimonial List */}
                            </div>
                            {/* Section Container */}
                        </div>
                    </div>
                    {/* Section Spacer */}
                </section>
                {/*...::: Testimonial Section Start :::... */}
                {/*...::: Core Value Section Start :::... */}
                <section id="core-value">
                    {/* Section Spacer */}
                    <div className="jos mx-5 rounded-[50px] bg-black px-[20px] py-20 sm:px-[50px] md:mx-[50px] lg:px-[100px] xl:py-[130px]">
                        {/* Section Container */}
                        <div className="global-container">
                            {/* Section Content Block */}
                            <div className="mb-10 text-center lg:mb-12 xl:mb-20">
                                <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px]">
                                    <h2 className="text-white">The core values behind our work</h2>
                                </div>
                            </div>
                            {/* Section Content Block */}
                            {/* Horizontal Separator */}
                            <div className="mb-6 h-[4px] w-full rounded bg-colorCodGray sm:mb-0" />
                            {/* Core Value list */}
                            <ul className="grid grid-cols-1 justify-between gap-6 md:grid-cols-2 xxl:flex xxl:flex-nowrap">
                                {/* Core Value Item */}
                                <li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
                                    <div className="mb-3 flex items-center gap-x-3 md:mb-6">
                                        <div className="h-[30px] w-[30px]">
                                            <Image
                                                src="/assets/img_placeholder/th-1/core-value-icon-1.svg"
                                                alt="core-value-icon-1"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <h4 className="flex-1 text-white">Innovation</h4>
                                    </div>
                                    <p className="text-lg text-white lg:text-[21px]">We’re committed to exploring new technologies, and finding</p>
                                </li>
                                {/* Core Value Item */}
                                {/* Core Value Item */}
                                <li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
                                    <div className="mb-3 flex items-center gap-x-3 md:mb-6">
                                        <div className="h-[30px] w-[30px]">
                                            <Image
                                                src="/assets/img_placeholder/th-1/core-value-icon-2.svg"
                                                alt="core-value-icon-2"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <h4 className="flex-1 text-white">Excellence</h4>
                                    </div>
                                    <p className="text-lg text-white lg:text-[21px]">
                                        We set high standards for our work &amp; we are dedicated team
                                    </p>
                                </li>
                                {/* Core Value Item */}
                                {/* Core Value Item */}
                                <li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
                                    <div className="mb-3 flex items-center gap-x-3 md:mb-6">
                                        <div className="h-[30px] w-[30px]">
                                            <Image
                                                src="/assets/img_placeholder/th-1/core-value-icon-3.svg"
                                                alt="core-value-icon-3"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <h4 className="flex-1 text-white">Collaboration</h4>
                                    </div>
                                    <p className="text-lg text-white lg:text-[21px]">We believe in the power of collaboration, working closely</p>
                                </li>
                                {/* Core Value Item */}
                                {/* Core Value Item */}
                                <li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
                                    <div className="mb-3 flex items-center gap-x-3 md:mb-6">
                                        <div className="h-[30px] w-[30px]">
                                            <Image
                                                src="/assets/img_placeholder/th-1/core-value-icon-4.svg"
                                                alt="core-value-icon-4"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <h4 className="flex-1 text-white">Integrity</h4>
                                    </div>
                                    <p className="text-lg text-white lg:text-[21px]">We uphold the highest ethical honesty in all our interactions</p>
                                </li>
                                {/* Core Value Item */}
                            </ul>
                            {/* Core Value list */}
                        </div>
                        {/* Section Container */}
                    </div>
                    {/* Section Spacer */}
                </section>
                {/*...::: Core Value Section End :::... */}
                {/*...::: Team Section Start :::... */}
                <section id="team-section">
                    {/* Section Spacer */}
                    <div className="py-20 xl:py-[130px]">
                        {/* Section Container */}
                        <div className="global-container">
                            {/* Section Content Block */}
                            {/* Section Content Block */}
                            {/* Team Member List */}
                            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {/* Team Member Item */}
                                <li className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]" data-jos_animation="flip" data-jos_delay="0.1">
                                    <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                                        <Image
                                            src="/assets/img_placeholder/th-1/team-member-img-1.jpg"
                                            alt="team-member-img-1"
                                            width={376}
                                            height={400}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <Link
                                            href="/team-details"
                                            className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
                                        >
                                            Mr. Abraham Maslo
                                        </Link>
                                        <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                                            <span className="text-[21px]">Chief AI Officer</span>
                                            <ul className="mt-auto flex gap-x-[15px]">
                                                <li>
                                                    <Link
                                                        rel="noopener noreferrer"
                                                        href="http://www.facebook.com"
                                                        className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                                                    >
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/facebook-icon-white.svg"
                                                            alt="facebook"
                                                            width={14}
                                                            height={14}
                                                            className="opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/facebook-icon-black.svg"
                                                            alt="facebook"
                                                            width={14}
                                                            height={14}
                                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        rel="noopener noreferrer"
                                                        href="http://www.twitter.com"
                                                        className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                                                    >
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/twitter-icon-white.svg"
                                                            alt="twitter"
                                                            width={14}
                                                            height={14}
                                                            className="opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/twitter-icon-black.svg"
                                                            alt="twitter"
                                                            width={14}
                                                            height={14}
                                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        rel="noopener noreferrer"
                                                        href="http://www.linkedin.com"
                                                        className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                                                    >
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/linkedin-icon-white.svg"
                                                            alt="linkedin"
                                                            width={14}
                                                            height={14}
                                                            className="opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/linkedin-icon-black.svg"
                                                            alt="linkedin"
                                                            width={14}
                                                            height={14}
                                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        rel="noopener noreferrer"
                                                        href="http://www.instagram.com"
                                                        className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                                                    >
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/instagram-icon-white.svg"
                                                            alt="instagram"
                                                            width={14}
                                                            height={14}
                                                            className="opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/instagram-icon-black.svg"
                                                            alt="instagram"
                                                            width={14}
                                                            height={14}
                                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* Team Member Item */}
                                {/* Team Member Item */}
                                <li className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]" data-jos_animation="flip" data-jos_delay="0.2">
                                    <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                                        <Image
                                            src="/assets/img_placeholder/th-1/team-member-img-2.jpg"
                                            alt="team-member-img-2"
                                            width={376}
                                            height={400}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <Link
                                            href="/team-details"
                                            className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
                                        >
                                            Willium Robert
                                        </Link>
                                        <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                                            <span className="text-[21px]">Data Engineer</span>
                                            <ul className="mt-auto flex gap-x-[15px]">
                                                <li>
                                                    <Link
                                                        rel="noopener noreferrer"
                                                        href="http://www.facebook.com"
                                                        className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                                                    >
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/facebook-icon-white.svg"
                                                            alt="facebook"
                                                            width={14}
                                                            height={14}
                                                            className="opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/facebook-icon-black.svg"
                                                            alt="facebook"
                                                            width={14}
                                                            height={14}
                                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        rel="noopener noreferrer"
                                                        href="http://www.twitter.com"
                                                        className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                                                    >
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/twitter-icon-white.svg"
                                                            alt="twitter"
                                                            width={14}
                                                            height={14}
                                                            className="opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/twitter-icon-black.svg"
                                                            alt="twitter"
                                                            width={14}
                                                            height={14}
                                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        rel="noopener noreferrer"
                                                        href="http://www.linkedin.com"
                                                        className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                                                    >
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/linkedin-icon-white.svg"
                                                            alt="linkedin"
                                                            width={14}
                                                            height={14}
                                                            className="opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/linkedin-icon-black.svg"
                                                            alt="linkedin"
                                                            width={14}
                                                            height={14}
                                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        rel="noopener noreferrer"
                                                        href="http://www.instagram.com"
                                                        className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                                                    >
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/instagram-icon-white.svg"
                                                            alt="instagram"
                                                            width={14}
                                                            height={14}
                                                            className="opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/instagram-icon-black.svg"
                                                            alt="instagram"
                                                            width={14}
                                                            height={14}
                                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* Team Member Item */}
                                {/* Team Member Item */}
                                <li className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]" data-jos_animation="flip" data-jos_delay="0.3">
                                    <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                                        <Image
                                            src="/assets/img_placeholder/th-1/team-member-img-3.jpg"
                                            alt="team-member-img-3"
                                            width={376}
                                            height={400}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <Link
                                            href="/team-details"
                                            className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
                                        >
                                            Henry Fayol
                                        </Link>
                                        <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                                            <span className="text-[21px]">Research Scientist</span>
                                            <ul className="mt-auto flex gap-x-[15px]">
                                                <li>
                                                    <Link
                                                        rel="noopener noreferrer"
                                                        href="http://www.facebook.com"
                                                        className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                                                    >
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/facebook-icon-white.svg"
                                                            alt="facebook"
                                                            width={14}
                                                            height={14}
                                                            className="opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/facebook-icon-black.svg"
                                                            alt="facebook"
                                                            width={14}
                                                            height={14}
                                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        rel="noopener noreferrer"
                                                        href="http://www.twitter.com"
                                                        className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                                                    >
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/twitter-icon-white.svg"
                                                            alt="twitter"
                                                            width={14}
                                                            height={14}
                                                            className="opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/twitter-icon-black.svg"
                                                            alt="twitter"
                                                            width={14}
                                                            height={14}
                                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        rel="noopener noreferrer"
                                                        href="http://www.linkedin.com"
                                                        className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                                                    >
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/linkedin-icon-white.svg"
                                                            alt="linkedin"
                                                            width={14}
                                                            height={14}
                                                            className="opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/linkedin-icon-black.svg"
                                                            alt="linkedin"
                                                            width={14}
                                                            height={14}
                                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        rel="noopener noreferrer"
                                                        href="http://www.instagram.com"
                                                        className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                                                    >
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/instagram-icon-white.svg"
                                                            alt="instagram"
                                                            width={14}
                                                            height={14}
                                                            className="opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src="/assets/img_placeholder/th-1/instagram-icon-black.svg"
                                                            alt="instagram"
                                                            width={14}
                                                            height={14}
                                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* Team Member List */}
                        </div>
                        {/* Section Container */}
                    </div>
                    {/* Section Spacer */}
                </section>
                {/*...::: Team Section End :::... */}

                {/* Body Background Shape 1 */}
                <div className="orange-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]"></div>

                {/* Body Background Shape 2 */}
                <div className="orange-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]"></div>
            </main>
            {/*...::: Footer Start :::... */}
            <Footer_01 />
            {/*...::: Footer End :::... */}
        </div>
    );
}

export default Home;
