import Link from "next/link";
import LogoHomeFour from "../../svg/logo/footer_logo_home_3";
import FooterCommonLinkItem from "./FooterCommonLinkItem";
import { SocialLinksTwo } from "@/components/common/social-links";
import SubcribeHomeFour from "@/components/forms/SubcribeHomeFour";

 const footer_content = {
    footer_info: <>Your Ultimate Destination <br />for Comprehensive and Career <br />Advancing Coding Courses.</>,
    subcribe: "Subcribe.",
    title: "Only valuable resource no bullshit",

 }
 const {footer_info, subcribe, title}  = footer_content

const FooterFour = () => {
    return (
        <>
            <footer>
                <div className="footer-area footer-bg-4 pt-100">
                    <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget footer-4-col-1 mb-30">
                                <div className="footer-widget-logo mb-20">
                                    <Link href="/">
                                        <span> <LogoHomeFour /> </span>
                                    </Link>
                                </div>
                                <div className="footer-widget-content">
                                    <p className="footer-widget-text mb-20 ml-15">{footer_info} </p>
                                    <div className="fooer-btn-4 " style={{marginLeft:"15px"}}>
                                        <Link className="blue-btn" href="/">Join Today</Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <FooterCommonLinkItem /> 
                            <div className="col-lg-3 col-md-6 col-sm-8" >
                                <div className="footer-widget  footer-4-col-4 mb-40">
                                    <h4 className="footer-widget-title ml-30 mb-20">{subcribe}</h4>
                                    <div className="footer-widget-content mb-40 ml-30">
                                        <p className="footer-widget-text mb-20">{title}</p>
                                            <SubcribeHomeFour />
                                    </div>
                                    <div className="footer-widget-social ml-30">
                                        <SocialLinksTwo /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-4 " >
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footer-widget-copyright footer-widget-copyright-4 text-center">
                                    <span>© {new Date().getFullYear()} <Link target="_blank" href="">LearnLogicify</Link> All Rights Reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterFour;