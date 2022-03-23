import "./CarouselWrapper.css";

export default function CarouselWrapper() {
  const items = [
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647873448/L%27institut%20d%27Aur%C3%A9/image_uvjpsj_kfzbzs.webp",
      linkSrc: "https://unsplash.com/@luxdamore",
      text: "Luca Iaconelli",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647991601/L%27institut%20d%27Aur%C3%A9/woman-s-eye-with-black-eye-makeup-macro-style-image-long-eyelashes_lrrjhv.webp",
      linkSrc: "https://fr.freepik.com/photos/personnes",
      text: "Personnes photo créé par Racool_studio",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647992271/L%27institut%20d%27Aur%C3%A9/beautiful-girl-with-colorful-makeup_t8mfml.webp",
      linkSrc: "https://fr.freepik.com/photos/femme",
      text: "Femme photo créé par valuavitaly",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1648039654/L%27institut%20d%27Aur%C3%A9/icons8-icons8-480_dqclsk.webp",
      linkSrc: "https://icons8",
      text: "Icônes par Icons8",
    },
  ];

  return (
    <div className="slider">
      <div id="container-swipe">↔︎</div>

      <div className="slides">
        {items.map((item, index) => {
          return (
            <div id={`slide-${index}`} key={index}>
              <img
                src={item.imgUrl}
                alt="Regard d'une femme"
                width="470px"
                height="316px"
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
