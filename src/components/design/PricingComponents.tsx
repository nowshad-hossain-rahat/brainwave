import { lines } from "../../assets";
import "../../assets/scss/PricingComponents.scss";

export const LeftLine = () => {
  return (
    <div className="left-line">
      <img
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

export const RightLine = () => {
  return (
    <div className="right-line">
      <img
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};
