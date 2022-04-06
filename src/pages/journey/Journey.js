import "./Journey.css";
import { Helmet } from "react-helmet";

export default function Journey() {
  return (
    <div className="page-container" id="journey">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mon parcours</title>
        <link
          rel="canonical"
          href="https://linstitut-daure.netlify.app/mon-parcours"
        />
      </Helmet>
      <div id="wrapper-title">
        <h1>Mon parcours</h1>
        <p>De multitâches à Lash Artist</p>
      </div>
    </div>
  );
}
