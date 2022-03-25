import "./Dermopigmentation.css";
import Slider from "./Slider";
import { items } from "./items";
import styled from "styled-components";
import { a } from "react-spring";

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

export default function Dermopigmentation() {
  return (
    <div className="page-container" id="dermopigmentation">
      <div id="wrapper-title">
        <h1>Dermopigmentation</h1>
        <p>Redonner de la couleur à votre peau</p>
      </div>
      <Slider items={items}>
        {({ css }, i) => (
          <Content>
            <Image style={{ backgroundImage: css }} />
          </Content>
        )}
      </Slider>
    </div>
  );
}
