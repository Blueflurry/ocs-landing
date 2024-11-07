import Image from "next/image";
import React from "react";

const _team = () => {
    return (
        <section id="team-section">
            {/* Section Container */}
            <div className="global-container">
                {/* Team Member List */}
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20 mt-10 xl:mb-[120px] xl:mt-[60px]">
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
                        <div className="mt-5 text-center">
                            <span className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]">Naman Thakur</span>
                            <br />
                            <span className="text-[21px]">Founder & CEO</span>
                        </div>
                    </li>
                    {/* Team Member Item */}
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
                        <div className="mt-5 text-center">
                            <span className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]">Ujjwal Batra</span>
                            <br />
                            <span className="text-[21px]">Co-Founder & COO</span>
                        </div>
                    </li>
                    {/* Team Member Item */}
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
                        <div className="mt-5 text-center">
                            <span className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]">Siddhant Jain</span>
                            <br />
                            <span className="text-[21px]">Chief Technical Officer</span>
                        </div>
                    </li>
                    {/* Team Member Item */}
                </ul>
                {/* Team Member List */}
            </div>
            {/* Section Container */}
        </section>
    );
};

export default _team;
