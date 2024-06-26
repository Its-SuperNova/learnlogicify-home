import Link from "next/link";


interface social_links_type {
  link: string;
  target: string;
  icon: string;
}


const social_links: social_links_type[] = [
  {
    link: "http://whatsapp.com",
    target: "_blank",
    icon: "fab fa-whatsapp", 
  },
  {
    link: "http://youtube.com",
    target: "_blank",
    icon: "fa-brands fa-youtube",
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "fab fa-linkedin-in", 
  }, 
  {
    link: "https://www.vimeo.com",
    target: "_blank",
    icon: "fab fa-vimeo-v", 
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          target={l.target ? l.target : ""}>
          <i className={l.icon} ></i> {' '}
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;




interface social_links_type_2 {
  link: string;
  color: string;
  icon: string;
}


const social_links_2: social_links_type_2[] = [
  {
    link: "http://whatsapp.com",
    color: "footer-facebook",
    icon: "fa-brands fa-whatsapp", 
  },
  {
    link: "http://youtube.com",
    color: "",
    icon: "fa-brands fa-youtube",
  },
  {
    link: "https://www.linkedin.com",
    color: "footer-linkedin",
    icon: "fa-brands fa-linkedin-in", 
  }, 
  {
    link: "https://www.instagram.com",
    color: "footer-insta",
    icon: "fa-brands fa-instagram", 
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_2.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className={link.color}
          target="_blank">
          <i className={link.icon}></i>{" "}
        </Link>
      ))}
    </>
  );
};


 

// team social links
interface team_social_links_type {
  id: number;
  link: string;
  icon: string;
}
const team_social_data: team_social_links_type[] = [
  {
    id: 1, 
    link:"http://whatsapp.com",
    icon: "fa-brands fa-whatsapp",
  },
  {
    id: 2, 
    link:"http://youtube.com",
    icon: "fa-brands fa-youtube",
  },
  {
    id: 3, 
    link:"http://linkedin.com",
    icon: "fa-brands fa-linkedin-in",
  },
]

export const TeamSocialLinks = () => {
  return (
    <>
      {team_social_data.map((t_item, t_index) => (
        <Link
          key={t_index}
          href={t_item.link} 
          target="_blank">
          <i className={t_item.icon}></i>{" "}
        </Link>
      ))}
    </>
  )
}


// copy right text 
type copy_right_text_type =  {
  copy_right: JSX.Element;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <> ©{new Date().getFullYear()} Copyrights by company. All Rights Reserved. Designed by 
                  <Link target="_blank" href=""> LearnLogicify Technology. </Link> 
              </>,
}

const {copy_right}  = copy_right_text
export const CopyRight = ()  => {
  return (
    <> {copy_right}</>
  )
}


