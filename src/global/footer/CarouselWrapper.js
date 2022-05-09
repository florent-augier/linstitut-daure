import "./CarouselWrapper.css";

export default function CarouselWrapper() {
  const items = [
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/q_10/c_scale,h_158,w_235/v1647873448/L%27institut%20d%27Aur%C3%A9/image_uvjpsj_kfzbzs.webp",
      dataSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/c_scale,h_158,w_235/v1647873448/L%27institut%20d%27Aur%C3%A9/image_uvjpsj_kfzbzs.webp",

      linkSrc: "https://unsplash.com/@luxdamore",
      text: "Luca Iaconelli",
      alt: "regard d'un femme aux yeux clairs",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/q_10/c_scale,h_158,w_235/v1651220945/L'institut%20d'Aur%C3%A9/lash-mega_qtsmjm.webp",
      dataSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/c_scale,h_158,w_235/v1651220945/L'institut%20d'Aur%C3%A9/lash-mega_qtsmjm.webp",

      linkSrc: "https://fr.freepik.com/photos/personnes",
      text: "Personnes photo créé par Racool_studio",
      alt: "oeil d'un femme avec de faux cils",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/q_10/c_scale,h_158,w_235/v1651222309/L'institut%20d'Aur%C3%A9/lash-mega-volume_mhnbxl.webp",
      dataSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/c_scale,h_158,w_235/v1651222309/L'institut%20d'Aur%C3%A9/lash-mega-volume_mhnbxl.webp",

      linkSrc: "https://fr.freepik.com/photos/femme",
      text: "Femme photo créé par valuavitaly",
      alt: "oeil coloré d'un femme avec de faux cils",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/q_10/v1651760263/L'institut%20d'Aur%C3%A9/icons8-icons8_lfcxxs.webp",
      dataSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1651760263/L%27institut%20d%27Aur%C3%A9/icons8-icons8_lfcxxs.webp",

      linkSrc: "https://icons8",
      text: "Icônes par Icons8",
      alt: "logo d'Icons8",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/q_10/c_scale,h_158,w_235/v1651225966/L'institut%20d'Aur%C3%A9/numero1_fruo2a.webp",
      dataSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/c_scale,h_158,w_235/v1651225966/L'institut%20d'Aur%C3%A9/numero1_fruo2a.webp",

      linkSrc:
        "https://unsplash.com/@photos_by_lanty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      text: "Photos by Lanty on Unsplash",
      alt: "numéro un photographié",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/q_10/c_scale,h_158,w_235/v1651226173/L'institut%20d'Aur%C3%A9/numero2_lijlkd.webp",
      dataSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/c_scale,h_158,w_235/v1651226173/L'institut%20d'Aur%C3%A9/numero2_lijlkd.webp",

      linkSrc:
        "https://unsplash.com/@deefbelgium?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      text: "Photos by David Libeert on Unsplash",
      alt: "numéro deux photographié",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/q_10/c_scale,h_158,w_235/v1651219226/L'institut%20d'Aur%C3%A9/number3_eps6wv.webp",
      dataSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/c_scale,h_158,w_235/v1651219226/L'institut%20d'Aur%C3%A9/number3_eps6wv.webp",

      linkSrc:
        "https://unsplash.com/@justusmenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      text: "Photos by Justus Menke on Unsplash",
      alt: "numéro trois photographié",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/q_10/c_scale,h_158,q_100,w_235/v1651227097/L'institut%20d'Aur%C3%A9/microshading1_z9j6vf.webp",
      dataSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/c_scale,h_158,q_100,w_235/v1651227097/L'institut%20d'Aur%C3%A9/microshading1_z9j6vf.webp",

      linkSrc: "https://www.freepik.com/photos/brows",
      text: "Brows photo created by freepik - www.freepik.com",
      alt: "pratique d'un microshading",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/q_10/c_scale,h_158,q_100,w_235/v1651227531/L'institut%20d'Aur%C3%A9/microblading2_cvgs0x.webp",
      dataSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/c_scale,h_158,q_100,w_235/v1651227531/L'institut%20d'Aur%C3%A9/microblading2_cvgs0x.webp",

      linkSrc: "https://www.freepik.com/photos/brows",
      text: "Brows photo created by freepik - www.freepik.com",
      alt: "pratique d'un microshading",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/q_10/c_scale,h_158,q_100,w_235/v1651228003/L'institut%20d'Aur%C3%A9/beautiful-eyebrow_gxxeri.webp",
      dataSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/c_scale,h_158,q_100,w_235/v1651228003/L'institut%20d'Aur%C3%A9/beautiful-eyebrow_gxxeri.webp",

      linkSrc: "https://www.freepik.com/photos/brows",
      text: "Brows photo created by freepik - www.freepik.com",
      alt: "regard de profil",
    },
  ];

  return (
    <div className="slider">
      <div id="container-swipe">Faites défiler les images</div>

      <div className="slides">
        {items.map((item, index) => {
          return (
            <div id={`slide-${index}`} key={index}>
              <img
                loading="lazy"
                src={item.imgUrl}
                alt={item.alt}
                width="235px"
                height="158px"
                data-src={item.dataSrc}
              />
              <div className="wrapper-slide-text">
                →
                <a href={item.linkSrc} target="_blank" rel="noreferrer">
                  &nbsp;
                  {item.text}&nbsp;
                </a>
                ←
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
