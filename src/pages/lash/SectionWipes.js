// @flow
import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const SectionWipes2Styled = styled.div`
  overflow: hidden;

  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }

  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }

  .panel.gold {
    background-color: var(--gold);
    color: var(--dark);
  }

  .panel.dark {
    background-color: var(--dark);
    color: var(--gold);
  }

  .panel.white {
    background-color: white;
    color: var(--gold);
  }
`;

const SectionWipes2 = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene triggerHook="onLeave" duration="300%" pin>
        <Timeline wrapper={<div id="pinContainer" />}>
          <section className="panel gold">
            <span>Cil à Cil</span>
          </section>
          <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
            <section className="panel dark">
              <span>Volume Russe</span>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel white">
              <span>Méga Volume Russe</span>
            </section>
          </Tween>
          <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
            <section className="panel gold">
              <span>Des prestations de qualité</span>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default SectionWipes2;
