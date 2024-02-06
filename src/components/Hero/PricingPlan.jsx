import PropTypes from "prop-types";
import BenefitItem from "./BenefitItem";
import { getBenefits } from "./BenefitUtils";
import RightArrow from "../SVG/RightArrow";

// Premium plan properties
const premiumProperties = {
  planCard: "sm:w-[285px] z-10 rounded-lg pt-6",
  planTitle: <h2 className="font-bold text-center">Premium</h2>,
  planList: "py-4",
  planType: "Premium",
  planButton:
    "bg-primary hover:bg-primary-hover text-white mt-2 py-2 px-4 rounded border-white",
  planPriceList: "bg-deep-orange",
  planRedBox: (
    <p className="text-white my-auto text-small">
      <b>Günstiger</b> als <br /> private Nachhilfe!
    </p>
  ),
  planDiscout: "text-white",
  planOldPrice: "19,95",
  planNewPrice: "15,96",
  planWeeklyPrice: (
    <p className="text-black  text-small my-auto">
      <b>Nur</b> 3,99 € <br /> pro Woche
    </p>
  ),
  benefits: getBenefits(false, "text-small"),
};

// Basis plan properties
const basisProperties = {
  planCard: "sm:w-[248px] z-0 pt-4 rounded-tr-lg rounded-bl-lg rounded-br-lg",
  planTitle: <h3 className="font-bold text-center">Basis</h3>,
  planList: "pb-4",
  planType: "Basis",
  planButton:
    "hover:bg-gray-light text-gray text-sm mt-2 py-1 px-4 border border-gray-medium rounded ",
  planDiscout: "text-deep-orange",
  planOldPrice: "14,95",
  planNewPrice: "11,96",
  planPriceList: "border border-deep-orange w-10 h-6 rounded-xl",
  planRedBox: (
    <p className="text-white my-auto text-xs">
      <b>Günstiger</b> als <br /> private Nachhilfe!
    </p>
  ),
  planWeeklyPrice: (
    <p className="text-black text-xs my-auto">
      <b>Nur</b> 2,99 € <br /> pro Woche
    </p>
  ),
  benefits: getBenefits(true, "text-xs"),
};

// PricingPlan component that renders the pricing plan card
function PricingPlan({ planType }) {
  const properties =
    planType === "premium" ? premiumProperties : basisProperties;

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
  planType: PropTypes.oneOf(["basis", "premium"]).isRequired,
};

export default PricingPlan;
