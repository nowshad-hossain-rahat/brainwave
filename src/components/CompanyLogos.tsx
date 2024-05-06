import React from "react";
import { companyLogos } from "../constants";
import "../assets/scss/companylogos.scss"
const CompanyLogos = ({ className }: { className?: string }) => {
  return (
    <div id="container" className={className}>
      <h5 className="h5">
        Helping people create beautiful content at
      </h5>
      <ul>
        {companyLogos.map((logo, index) => (
          <li
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
