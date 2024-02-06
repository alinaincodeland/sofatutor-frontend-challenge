import CardsList from "./CardsList";
import PricingInfoCard from "./PricingInfoCard";

function Hero() {
  return (
    <div className="bg-gradient-to-r from-green-D1 to-green py-4">
      <div className="mx-auto max-w-[74rem]">
        <CardsList />
        <div className="xs:flex-col sm:flex justify-center items-center">
          <PricingInfoCard />
        </div>
      </div>
    </div>
  );
}

export default Hero;
