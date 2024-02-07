import PricingPlan from "./PricingPlan";
import { getBenefits } from "./BenefitUtils";

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

function BasisPlan() {
  return <PricingPlan properties={basisProperties} />;
}

export default BasisPlan;
