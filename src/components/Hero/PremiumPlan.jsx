import PricingPlan from "./PricingPlan";
import { getBenefits } from "./BenefitUtils";

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

function PremiumPlan() {
  return <PricingPlan properties={premiumProperties} />;
}

export default PremiumPlan;
