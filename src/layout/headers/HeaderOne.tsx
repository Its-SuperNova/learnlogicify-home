'use client'
import Link from "next/link";
import { useState } from "react"; 
import NavMenu from "./Menu/nav-menu";
import LogoHomeFour from "../../svg/logo/header_logo_home_5";
import OffcanvasArea from "@/components/common/OffcanvasArea";
import useSticky from "@/hooks/use-sticky";

const HeaderOne = () => {

	const [openCanvas, setOpenCanvas] = useState(false)
	const [openSearch, setOpenSearch] = useState(false)


	return (
		<>
			<header>
				<div id="header-sticky" className={`tptransparent__header header-1`}>
					<div className="tp-header-top">
						<div className="container">
							<div className="tp-mega-menu-wrapper">
								<div className="row align-items-center">
									<div className="col-xxl-2 col-xl-2 col-lg-6 col-6">
										<div className="tplogo__area">
											<Link href="/">
												<span>
													<LogoHomeFour />
												</span>
											</Link>
										</div>
									</div>
									<div className="col-xxl-8 col-xl-7 col-lg-7 d-none d-xl-block">
										<div className="tpmenu__area main-mega-menu text-center">
											<nav className="tp-main-menu-content">
												<NavMenu />
											</nav>
										</div>
									</div>
									<div className="col-xxl-2 col-xl-3 col-lg-6 col-6">
										<div className="tpheader__right d-flex align-items-center justify-content-end">
											<div className="tpheader__btn ml-25 d-none d-sm-block">
												<Link href="/contact" className="tp-header-btn">Get a Quote</Link>
											</div>
											<div className="offcanvas-btn d-xl-none mr-20">
												<button className="offcanvas-open-btn"
													onClick={() => setOpenCanvas(true)}><i className="fa-solid fa-bars"></i></button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<OffcanvasArea openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
		</>
	);
};

export default HeaderOne;