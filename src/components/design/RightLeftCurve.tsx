import { curve1, curve2 } from "../../assets";
import "../../assets/scss/Curve.scss";
export const RightCurve = () => {
  return (
    <div className="right-curve">
      <img src={curve2} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="left-curve">
      <img src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};
