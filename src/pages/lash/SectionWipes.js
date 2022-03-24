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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .panel span {
    position: relative;
    display: block;
  }

  .panel.gold {
    background-color: var(--gold);
    color: var(--dark);
    font-family: "Garamond-Regular";
  }

  .panel.dark {
    background-color: var(--dark);
    color: var(--gold);
    font-family: "Tahu";
    font-size: 100px;
  }

  .panel.white {
    background-color: white;
    color: var(--gold);
    font-size: 120px;
    font-family: "Garamond-SemiBold";
  }

  .panel.gold {
    font-size: 80px;
    font-family: "Garamond-ExtraBold";
    font-weight: "bolder";
  }

  .panel.gold.mega {
    font-size: 140px;
    font-family: "Garamond-ExtraBold";
    font-weight: "bolder";
  }

  @media (max-width: 768px) {
    .panel.gold {
      font-size: 40px;
    }
    .panel.dark {
      font-size: 60px;
    }
    .panel.white {
      font-size: 80px;
    }
    .panel.gold.mega {
      font-size: 100px;
    }
  }
  @media (max-width: 420px) {
    .panel.gold {
      font-size: 30px;
    }
    .panel.dark {
      font-size: 50px;
    }
    .panel.white {
      font-size: 70px;
    }
    .panel.gold.mega {
      font-size: 90px;
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
              <span>Pose Mixte</span>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel white">
              <span>Volume Russe</span>
            </section>
          </Tween>
          <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
            <section className="panel gold mega">
              <span>Méga Volume</span>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default SectionWipes2;
