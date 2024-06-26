import Link from "next/link";

// footer link type
interface footer_links_type {
    id: number;
    title: string;
    links: {
        title: string;
        link: string;
    }[];
}
// footer link  data
const footer_links: footer_links_type[] = [
    {
      id: 1,
      title: "Links",
      links: [
        { title: "Home", link: "/" },
        { title: "About Us", link: "/about" },
        { title: "Project", link: "/portfolio" },
        { title: "Plan & Pricing", link: "/pricing" },
        { title: "Blog", link: "/blog" },
        { title: "Contact Us", link: "/contact" },
      ],
    },
    {
      id: 2,
      title: "Packages",
      links: [
        { title: "SEO Audit", link: "#" },
        { title: "SEO Services", link: "#" },
        { title: "SEO Marketing", link: "#" },
        { title: "SEO Analysis", link: "#" },
        { title: "SEO Optimization", link: "#" },
        { title: "Social Media", link: "#" },
      ],
    },
    {
      id: 3,
      title: "Legal & Policies",
      links: [
        { title: "Terms & Conditions", link: "#" },
        { title: "Privacy Policy", link: "#" },
        { title: "Refund Policy", link: "#" },
      ],
    },
    {
      id: 4,
      title: "Legal & Policies",
      links: [
        { title: "Terms & Conditions", link: "#" },
        { title: "Privacy Policy", link: "#" },
        { title: "Refund Policy", link: "#" },
      ],
    },
    
  ]

const FooterCommonLinkItem = () => {
    return (
        <>
              {footer_links.map((item, i) => (
                    <div key={i} className="c col-lg-3 col-md-6" style={{width:"220px",paddingLeft:"30px",paddingRight:"0px"}}>
                      <div className="footer-widget footer-col-2 mb-40">
                        <h4 className="footer-widget-title mb-15">
                          {item.title}
                        </h4>
                        <div className="footer-widget-link">
                          <ul>
                            {item.links?.map((link, index) => (
                              <li key={index}>
                                <Link href={link.link}>{link.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
          
            
        </>
    );
};
export default FooterCommonLinkItem;