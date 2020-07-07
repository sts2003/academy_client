import React from "react";
import Lnb from "../components/Lnb";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";

class ACSC03 extends React.Component {
  render() {
    return (
      <div>
        <Lnb title="Notice" column="Home > Notice" />
        <Fade left>
          <p>안녕하세요? 금학 해법수학학원입니다.</p>
        </Fade>

        <Fade bottom>
          <p>안녕하세요? 금학 해법수학학원입니다.</p>
        </Fade>

        <Flip top>
          <p>천둥 번개 우르르 쾅쾅</p>
        </Flip>

        <Slide left>
          <p>쿵</p>
        </Slide>

        <Roll bottom>
          <p>쾅</p>
        </Roll>

        <Rotate right>
          <p>쿵</p>
        </Rotate>

        <Zoom top>
          <p>쾅</p>
        </Zoom>

        <Bounce left>
          <p>쿵</p>
        </Bounce>

        <LightSpeed top>
          <p>쾅</p>
        </LightSpeed>
      </div>
    );
  }
}

export default ACSC03;
