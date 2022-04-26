import { Parallax } from "react-parallax";
import spaceStation from "../components/img/nasa1.jpg";
const ImageTwo = () => (
  <Parallax className="image" bgImage={spaceStation} strength={800}>
    <div className="content">
      <span className="img-txt">prepare the future</span>
    </div>
  </Parallax>
);

export default ImageTwo;
