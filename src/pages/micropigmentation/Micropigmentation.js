import "./Micropigmentation.css";
import { Helmet } from "react-helmet";

export default function Eyebrow() {
  return (
    <div className="page-container" id="micropigmentation">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Micropigmentation</title>
        <link
          rel="canonical"
          href="https://linstitut-daure.netlify.app/micropigmentation"
        />
      </Helmet>
      <div id="wrapper-title">
        <h1>Micropigmentation</h1>
        <p>Donner de la couleur à votre visage</p>
      </div>
    </div>
  );
}
