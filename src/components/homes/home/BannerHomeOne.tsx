"use client"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Image, { StaticImageData } from "next/image";
import WellcomeShape from "../../../svg/wellcome_shape";
import shape_1 from "@/assets/img/shape/banner-plus.png";
import shape_2 from "@/assets/img/shape/banner-dots.png";
import shape_3 from "@/assets/img/shape/banner-archer.png";
import shape_4 from "@/assets/img/shape/banner-pose.png";
import shape_5 from "@/assets/img/shape/banner-tree.png";
import shape_1_2 from "@/assets/img/shape/banner-megaphone.png";
import HeroSearchForm from "../../forms/HeroSearchForm";

interface shapes_img_type {
    img: StaticImageData;
    cls: string;
    data_depth: string;
}

const shapes_img: shapes_img_type[] = [
    { img: shape_1, cls: "one", data_depth: "0.3" },
    { img: shape_2, cls: "three", data_depth: "0.4" },
    { img: shape_3, cls: "four", data_depth: "0.1" },
    { img: shape_4, cls: "five", data_depth: "0.2" },
    { img: shape_5, cls: "six", data_depth: "0.3" },
]
const hero_banner_content = {
    sub_title: "Welcome To",
    title: <></>,
    sm_des: <>Discover a Wide Range of Coding Courses Tailored to Enhance Your Skills,<br /> Accelerate Your Career, and Boost Your Success.</>,
}
const { sub_title, title, sm_des } = hero_banner_content

const BannerHomeOne = () => {
    return (
        <>
            <style jsx>{`
                .container {
                    padding-left: 40px;
                    padding-right: 40px;
                }
                .tpbanner__title {
                    font-size: 100px;
                    font-weight: 700;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    line-height: 1;
                    background-image: -webkit-linear-gradient(291.09deg, #FF4F99 27.31%, #7F37FE 73.17%);
                    background-image: -moz-linear-gradient(291.09deg, #FF4F99 27.31%, #7F37FE 73.17%);
                    background-image: -ms-linear-gradient(291.09deg, #FF4F99 27.31%, #7F37FE 73.17%);
                    background-image: -o-linear-gradient(291.09deg, #FF4F99 27.31%, #7F37FE 73.17%);
                    background-image: linear-gradient(291.09deg, #FF4F99 27.31%, #7F37FE 73.17%);
                    -moz-animation: sliderTitle3 2s ease-in-out 1s forwards infinite alternate;
                    -webkit-animation: sliderTitle3 2s ease-in-out 1s forwards infinite alternate;
                    animation: sliderTitle3 3s ease-in-out 1s forwards infinite alternate;
                    background-size: 150% 150%;
                }
                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                    .tpbanner__title {
                        font-size: 80px;
                    }
                }
                @media (max-width: 767px) {
                    .tpbanner__title {
                        font-size: 50px;
                    }
                }
                @media only screen and (min-width: 576px) and (max-width: 767px) {
                    .tpbanner__title {
                        font-size: 70px;
                    }
                }
                /* Ensure the hero section takes up the full viewport height */
                .banner__area {
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .tpbanner-shape-wrappers {
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }
                .tpbanner__content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .tpbanner__sub-title, .tpbanner__title, p {
                    text-align: center;
                }
            `}</style>
            <MouseParallaxContainer>
                <section className="banner__area tpbanner-space scene tpbanner-shape-wrapper fix">
                    <div className="tpbanner-shape-wrappers">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="tpbanner__content">
                                        <div className="tpbanner__sub-title mb-15">
                                            <span>{sub_title}</span>
                                            <i><WellcomeShape /></i>
                                        </div>
                                        <h1 className="tpbanner__title mb-25 pb-10">LearnLogicify <br />Academy</h1>
                                        <p>{sm_des}</p>
                                        <div className="tpbanner__search">
                                            <HeroSearchForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tpbanner-shape d-none d-lg-block">
                            {shapes_img.map((shape, index) => (
                                <MouseParallaxChild key={index} factorX={0.02} factorY={0.02} className={`tpbanner-shape-${shape.cls}`}>
                                    <Image className="layer" data-depth={shape.data_depth} src={shape.img} alt="theme-pure" />
                                </MouseParallaxChild>
                            ))}
                        </div>
                    </div>
                    <MouseParallaxChild factorX={0} factorY={0.1} className="tpbanner-shape-wrappers tpbanner-shape-y scene-y">
                        <div className="tpbanner-shape d-none d-md-block">
                            <div className="tpbanner-shape-two">
                                <Image className="layer" data-depth="0.6" src={shape_1_2} alt="theme-pure" />
                            </div>
                        </div>
                    </MouseParallaxChild>
                </section>
            </MouseParallaxContainer>
        </>
    );
};

export default BannerHomeOne;
