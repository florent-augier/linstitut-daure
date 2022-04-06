import "./BodyCare.css";
import { Helmet } from "react-helmet";

export default function FacialCare() {
  return (
    <div id="body-care" className="page-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soins corporels</title>
        <link
          rel="canonical"
          href="https://linstitut-daure.netlify.app/soins-corporels"
        />
      </Helmet>
      <div id="wrapper-title">
        <h1>Soins corporels</h1>
        <p>Offrez à votre corps le soin qu'il mérite</p>
      </div>
    </div>
  );
}
