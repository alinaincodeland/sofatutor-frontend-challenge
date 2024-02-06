import { useEffect, useState } from "react";
import LinaDiscount from "../SVG/LinaDiscount";
import Cookies from "js-cookie";

const Banner = () => {
  const [showAlternateBanner, setShowAlternateBanner] = useState(false);

  // Check and set the initial banner version based on the cookie value
  useEffect(() => {
    const cookieValue = Cookies.get("bannerVersion");
    setShowAlternateBanner(cookieValue === "1");
  }, []);

  // Dynamic class for banner background colour based on the banner version
  const bannerBackgroundColour = showAlternateBanner
    ? "bg-alert border-b-alert"
    : "bg-gradient-to-r from-lime-L1 to-lime-L3  border-b-lime";

  return (
    // Banner container with dynamic background colour based on the banner version
    <div
      className={`${bannerBackgroundColour} border-solid border-b-2 relative`}
    >
      <div className="py-2 px-4 flex justify-between items-center max-w-[74rem] mx-auto">
        <div className="flex items-center space-x-4">
          <LinaDiscount />

          {/* Banner text with dynamic content based on the banner version  */}
          <div>
            <h5>
              <span className="font-bold">20 % Rabatt </span> –
              {showAlternateBanner
                ? " Jetzt ganz einfach den Schulstoff nachholen und 20% sparen!"
                : " Nur für kurze Zeit!"}
            </h5>

            {/* Display sub-headline only for the original banner */}
            {!showAlternateBanner && (
              <h6 className="hidden lg:block mb-2">
                30 Tage kostenlos testen und anschließend clever sparen.
              </h6>
            )}
            <h6 className="text-sm text-deep-orange uppercase sm:hidden">
              Letzter Kauf: <strong>Vor einer Minute.</strong>
            </h6>
          </div>
        </div>
        <div className="text-deep-orange hidden sm:block px-4">
          <h6 className="text-center uppercase">Letzter Kauf:</h6>
          <h5 className="font-bold text-center uppercase">Vor einer Minute.</h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
