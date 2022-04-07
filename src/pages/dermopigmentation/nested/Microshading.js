import React from "react";
import "./CommonNested.css";
import Strong from "../../../global/html/Strong";

export default function Microshading() {
  return (
    <div id="microshading" className="nested-container">
      <div className="nested-wrapper-header">
        <h2>Microshading</h2>
      </div>

      <div className="nested-wrapper-body">
        <p>
          C’est une technique qui permet de redessiner la ligne naturelle du
          sourcil et de combler les manques tout en apportant de l’intensité au
          sourcil.
        </p>
        <p>
          A l'aide d'une machine (
          <Strong text="le dermographe*" />
          ), la technique du{" "}
          <Strong
            text="Microshading"
            color="var(--gold)"
            uppercase={true}
          />{" "}
          sert à produire un effet d’ombrage semblable à celui du crayon à
          sourcils. Les pigments sont insérés sous forme de minuscules points
          aux contours fondus.
          <details id="dermographe">
            <summary>Qu'est ce qu'un dermographe ?</summary>Pour exercer son
            métier, l’esthéticienne ou la technicienne utilise un appareil qui
            porte le nom de « dermographe ». Elle se servira donc de cet outil
            pour réaliser votre maquillage permanent. Il existe deux types de
            dermographes : le dermographe électrique et le dermographe manuel.
            Le premier est plus facile à utiliser, tandis que le dermographe
            manuel requiert plus d’expérience. Le choix du dermographe est très
            important pour l’esthéticienne, car cela peut avoir un impact plus
            ou moins important sur les résultats de son travail et sur sa
            manière de faire.
          </details>
        </p>
        <p>
          Le but est de remplir le sourcil avec un effet d'ombrage ("shade"
          signifiant "ombre" en français) afin d'harmoniser le sourcil.
        </p>
      </div>
      <div className="pertinent-question">
        <h3>Peut-il y avoir des effets secondaires ?</h3>
      </div>
      <div className="pertinent-answer">
        <div className="custom-border"></div>
        <p>
          La technique du microshading est sans danger. Cependant, la peau peut
          être irritée après la séance et peut alors présenter des
          démangeaisons, un gonflement et/ou des rougeurs. Généralement, ces
          symptômes disparaissent très vite après la procédure. Si vous
          ressentez une vive douleur et remarquez des cloques, rendez-vous
          immédiatement chez votre médecin.
        </p>
      </div>
    </div>
  );
}
