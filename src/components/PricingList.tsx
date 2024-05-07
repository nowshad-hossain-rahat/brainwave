import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import "../assets/scss/PricingList.scss";

export default function PricingList() {
  return (
    <div className="pricing-list">
      {pricing.map((item) => (
        <div key={item.id} className="pricing-item">
          <h4>{item.title}</h4>

          <p>{item.description}</p>

          <div className="price">
            {item.price && (
              <>
                <div className="symbol">$</div>
                <div className="value">{item.price}</div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li key={index}>
                <img src={check} width={24} height={24} alt="Check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
