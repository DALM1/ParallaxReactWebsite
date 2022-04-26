import { Parallax } from "react-parallax";
import SpaceX from "../components/img/spacex.jpg";
const ImageThree = () => (
  <Parallax className="image" bgImage={SpaceX} strength={800}>
    <div className="content">
      <span className="img-txt">have a nice trip</span>
    </div>
  </Parallax>
);

export default ImageThree;
