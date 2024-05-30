"use client"
import Link from "next/link";
import { useState } from "react";
import NavMenu from "./Menu/nav-menu"; 
import LogoHomeFour from "../../svg/logo/header_logo_home_5";
import OffcanvasArea from "../../components/common/OffcanvasArea";
const HeaderOne = () => {
	const [openCanvas, setOpenCanvas] = useState(false)
	return (
		<>
			<style jsx>
				{`
				header{
					position: fixed;
					Z-index:5;
					width:100%;
					
				}
				.tptransparent__header-4{
					background-color:transparent;
				}
				`}
			</style>
			<header>
			<div className="tptransparent__header-4" style={{paddingTop: '0px', paddingBottom:'100px',height:"130px"}}>
					<div className="main-header" style={{marginBottom:"-30px"}}>
						<div className="custom-container">
							<div  className={`header-bg-4 ${ "header-sticky"}`}>
								<div className="row align-items-center">
									<div className="col-xl-3 col-lg-6 col-sm-5 col-6">
										<div className="tplogo__area">
											<Link href="/"> <span> <LogoHomeFour /></span> </Link>
										</div>
									</div>
									<div className="col-xl-7 col-lg-6  d-none d-xl-block" >
										<div className="tpmenu__area main-mega-menu" style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
											<nav className="tp-main-menu-content">
												<NavMenu />
											</nav>
										</div>
									</div>
									<div className="col-xl-2 col-lg-6 col-sm-7 col-6">
										<div className="header-btn header-btn-4 text-end">
											<Link className="blue-btn d-none d-xl-block" href="https://learnlogicify.com/login/index.php">login</Link>
											<div className="offcanvas-btn d-xl-none ml-20">
												<button style={{width:'50px'}}className="offcanvas-open-btn" onClick={() => setOpenCanvas(true)}><i className="fa-solid fa-bars"></i></button>
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