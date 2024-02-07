import PropTypes from "prop-types";
import BenefitItem from "./BenefitItem";
import RightArrow from "../SVG/RightArrow";

// PricingPlan component that renders the pricing plan card
function PricingPlan({ properties }) {
  return (
    <div
      className={`xs:w-full  bg-white shadow-lg  mb-0 ${properties.planCard}`}
    >
      {properties.planTitle}

      <ul className={properties.planList}>
        {properties.benefits.map((benefit, index) => (
          <BenefitItem key={index} {...benefit} />
        ))}
      </ul>

      <div className="pb-6 border-b border-gray-medium flex items-center justify-center text-center">
        <button className={`${properties.planButton}`}>
          <b>30 Tage</b> kostenlos testen
        </button>
      </div>

      <div className="mt-6 mb-3 px-4 text-dark-gray space-y-2 text-center">
        <div className="text-small font-bold text-gray-dark">
          Nach der Testphase
        </div>
        <ul className="flex justify-between align-top px-4 ">
          <li className={`w-10 h-6 rounded-xl ${properties.planPriceList}`}>
            <p className={`text-xs font-bold ${properties.planDiscout} pt-1`}>
              –20 <span className="font-normal">%</span>
            </p>
          </li>
          <li className="mb-2">
            <h4 className="line-through text-deep-orange">
              {properties.planOldPrice}
            </h4>
          </li>
          <li className="text-dark-green mb-2">
            <h4>
              {properties.planNewPrice}
              <span className="text-xsmall"> € mtl.&#42; </span>
            </h4>
          </li>
        </ul>
      </div>

      <div className="mt-4 flex text-center bg-deep-orange-L4 rounded-b-lg h-20">
        <div className="bg-deep-orange w-[45%] rounded-bl-lg flex justify-center">
          {properties.planRedBox}
        </div>
        <RightArrow />
        <div className="w-[40%] flex justify-center">
          {properties.planWeeklyPrice}
        </div>
      </div>
    </div>
  );
}

PricingPlan.propTypes = {
  properties: PropTypes.any,
};

export default PricingPlan;
