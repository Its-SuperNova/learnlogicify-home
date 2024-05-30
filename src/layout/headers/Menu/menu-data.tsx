import { StaticImageData } from "next/image";
import RightArrowMenu from "@/svg/home-1/RightArrowMenu";
// home demo
import home_demo_1 from "@/assets/img/menu/home-1.jpg";
import home_demo_2 from "@/assets/img/menu/home-2.jpg";
import home_demo_3 from "@/assets/img/menu/home-3.jpg";
import home_demo_4 from "@/assets/img/menu/home-4.jpg";
import home_demo_5 from "@/assets/img/menu/home-5.jpg";
// service deme 
import service_demo_1 from "@/assets/img/header-icon/keyword.png";
import service_demo_2 from "@/assets/img/header-icon/audit.png";
import service_demo_3 from "@/assets/img/header-icon/building.png";
import service_demo_4 from "@/assets/img/header-icon/media.png";
import service_demo_5 from "@/assets/img/header-icon/analysis.png";

import menu_banner from "@/assets/img/header-icon/header-banner/header-banner-1.png";
 
// type MenuData =  
interface menu_data_type  {
  id: number;
  title: string;
  link: string;
  has_dropdown?: boolean;
  has_megamenu?: boolean;  
  img_dropdown?: boolean;  
  service_dropdown?: boolean;  
  blog_dropdown?: boolean;  
  sub_menus?: {
      link?: string | any;
      title?: string;
      demo_img?: StaticImageData | any ; 
      layout?: {
        link: string;
        title: string;
      }[];
  }[];
  banner_sub_title?: string;
  banner_title?: JSX.Element;
  inner_title?: string;
  icon?: JSX.Element;
  m_banner?: StaticImageData;
}

// menu data 
const menu_data: menu_data_type[] = [
  {
    id: 7,
    title: "Home",
    link: "#",
  },
  {
    id: 3,
    title: "Courses",
    link: "/blog-masonry",
    has_dropdown: true,
    service_dropdown: true,
    inner_title: "Services Overview",
    sub_menus: [
      { link: "/keyword-search",           title: "Keyword Research",         demo_img: service_demo_1,  },
      { link: "/seo-audit",                title: "SEO Audit Services",       demo_img: service_demo_2,  },
      { link: "/social-services",          title: "Link Building Services",   demo_img: service_demo_3,  },
      { link: "/media-markiting",          title: "Social Media Marketing",   demo_img: service_demo_4,  },
      { link: "/marketing-analysis",       title: "SEO analysis.",            demo_img: service_demo_5,  },
    ],
    banner_sub_title: "SEO Agency",
    banner_title: <>The #1 SEO <br/> agency for fast growing <br /> companies.</>,
    icon: <RightArrowMenu />,
    m_banner: menu_banner,
  },
  {
    id: 8,
    title: "Portal",
    link: "/blog-detail-2",
    has_dropdown: false,     
  }, 
  {
    id: 9,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,     
  },  
];
export default menu_data;
