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
            <style jsx>{`
                .footer-widget-social {
                    margin-left: 10px;
                }

                @media (min-width: 766px) {
                    .footer-widget-social {
                        margin-left: 40px;
                    }
                }
            `}</style>
            <footer>
                <div className="footer-area footer-bg-4 pt-100">
                    <div className="container">
                    <div className="footer-top" >
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
                                        <div className="fix col-lg-3 col-md-6 col-sm-8 " style={{width:"250px"}}>
                                            <div className="footer-widget  footer-4-col-4 mb-40">
                                                <div className="footer-widget-social">
                                                    <SocialLinksTwo /> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                                <FooterCommonLinkItem /> 
                           
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