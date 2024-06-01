import Image from "next/image";
import UnderlineTwo from "../../../svg/underline_2";

import drive_shape_1 from "@/assets/img/banner/drive-thumb-b-1.png";
import drive_shape_2 from "@/assets/img/shape/settings-3.png";
import drive_shape_3 from "@/assets/img/shape/settings-4.png";
import drive_shape_4 from "@/assets/img/shape/list-text.png";
import DesktopIcon from "../../../svg/desktop_icon";
import MobileIcon from "../../../svg/mobile_icon";
import UpDownIcon from "../../../svg/up_down_icon";

import slide_shape_1 from "@/assets/img/shape/side-line-1.png";
import slide_shape_2 from "@/assets/img/shape/side-line-2.png";
import slide_shape_3 from "@/assets/img/shape/side-line-3.png";

import thumb_1 from "@/assets/img/banner/drive-thumb-b-2.png";
import thumb_2 from "@/assets/img/shape/search-content.png";
import thumb_3 from "@/assets/img/shape/cheackmark-1.png";
import thumb_4 from "@/assets/img/shape/settings.png";
import thumb_5 from "@/assets/img/shape/settings-2.png";
import Link from "next/link";


interface drive_contenttype  {
    title: JSX.Element;
    sub_title: string;
    title_2: JSX.Element;
    sub_title_2: string;
    title_3: JSX.Element;
    sm_des: JSX.Element;
    sm_des_1: JSX.Element;
}

const drive_content: drive_contenttype ={
    title: <><span className="big-shape">Why Choose us? <UnderlineTwo /> </span></>,
    sub_title: "Unlock Your Coding Potential",
    title_2: <>1. Expertise in Every Pixel</>,
    sub_title_2: "Engage and Excel",
    title_3: <>2. Interactive Learning Environment:</>,
    sm_des: <>At LearnLogicify, we bring expertise and passion to every aspect of our courses. Our team of seasoned instructors and industry professionals ensures that you receive top-notch training, with hands-on experience and real-world insights. Whether you're a beginner or an experienced coder, our comprehensive curriculum caters to all skill levels, providing you with the knowledge and confidence to excel in the world of programming.</>,
    sm_des_1: <>Experience the difference with our interactive learning environment. We go beyond traditional teaching methods, incorporating engaging visuals, interactive exercises, and immersive projects to keep you motivated and excited about learning. With our innovative approach, you'll not only grasp complex concepts faster but also enjoy the journey of mastering coding languages and techniques.</>
}
const {title, sub_title, title_2, sub_title_2, title_3, sm_des,sm_des_1} = drive_content

const DriveAreaHomeTwo = () => {
    return (
        <>
            <section className="drive-area p-relative drive-section-bottom pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="tpsection-wrapper text-center mb-85">
                            <h2 className="tpsection-title-two">{title}</h2>
                        </div>
                    </div>
                    </div>
                    <div className="tp-drive-shape p-relative">
                        <div className="row drive-section-bottom mb-200">
                            <div className="col-lg-6">
                                <div className="tpdrive-thumb p-relative ml-100 ">
                                    <Image src={drive_shape_1} alt="theme-pure" />
                                    <div className="tpdrive-thumb-shape">
                                        <div className="tpdrive-thumb-shape-five">
                                            <Image src={drive_shape_2} alt="theme-pure" />
                                        </div>
                                        <div className="tpdrive-thumb-shape-six">
                                            <Image src={drive_shape_3} alt="theme-pure" />
                                        </div>
                                        <div className="tpdrive-thumb-shape-seven">
                                            <Image src={drive_shape_4} alt="theme-pure" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tpdrive-wrapper mt-10 ml-55 mr-95">
                                    <div className="tpdrive-content">
                                    <span>{sub_title}</span>
                                    <h5 className="tpdrive-title mb-20">{title_2}</h5>
                                    <p>{sm_des_1}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="drive-big-shape d-none d-lg-block">
                            <UpDownIcon /> 
                            <div className="drive-shape">
                                <div className="drive-big-shape-one wow bounceIn" data-wow-delay=".5s" data-wow-duration=".3s">
                                    <Image src={slide_shape_1} alt="theme-pure" />
                                </div>
                                <div className="drive-big-shape-two wow bounceIn" data-wow-duration=".5s" data-wow-delay=".3s">
                                    <Image src={slide_shape_2} alt="theme-pure" />
                                </div>
                                <div className="drive-big-shape-three wow bounceIn" data-wow-duration=".5s" data-wow-delay=".3s">
                                    <Image src={slide_shape_3} alt="theme-pure" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tpdrive-wrapper ml-100">
                                    <div className="tpdrive-content">
                                    <span>{sub_title_2}</span>
                                    <h5 className="tpdrive-title mb-15">{title_3}</h5>
                                    <p>{sm_des}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tpdrive-thumb p-relative">
                                    <Image src={thumb_1} alt="theme-pure" />
                                    <div className="tpdrive-thumb-shape">
                                    <div className="tpdrive-thumb-shape-one">
                                        <Image src={thumb_2} alt="theme-pure" />
                                    </div>
                                    <div className="tpdrive-thumb-shape-two">
                                        <Image src={thumb_3} alt="theme-pure" />
                                    </div>
                                    <div className="tpdrive-thumb-shape-three">
                                        <Image src={thumb_4} alt="theme-pure" />
                                    </div>
                                    <div className="tpdrive-thumb-shape-four">
                                        <Image src={thumb_5} alt="theme-pure" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DriveAreaHomeTwo;
