import PgtBubble from "../SVG/PgtBubble";
import UnderTextArrow from "../SVG/UnderTextArrow";

function PricingInfoBox() {
  return (
    <div className="hidden lg:block text-black">
      <div className=" bg-white w-[408px] pl-8 py-8 shadow-lg rounded-tl-lg rounded-bl-lg -mt-36">
        <div className="flex justify-between">
          <div className="basis-1/3">
            <PgtBubble />
          </div>
          <div className="pl-3 text-[22px] ">
            <h3 className="font-bold mb-2 ">Auf Wunsch:</h3>
            <h3>kostenlose persönliche Einführung</h3>
          </div>
        </div>
        <div className="pt-16">
          <h6 className="uppercase mb-4 text-sm font-light">
            Expert*innen zeigen Ihnen die <b>Lernplattform</b>:
          </h6>
          <ul className="list-disc marker:text-green mb-2 text-[13px] leading-8">
            <li className="my-2 ml-4">
              <b> Online</b> – Dank Bildschirmübertragung können Sie dafür
              bequem zu Hause bleiben.
            </li>
            <li className="my-2 ml-4">
              <b> Individuell </b> – Unsere Expert*innen beantworten all Ihre
              Fragen zur Lernplattform.
            </li>
            <li className="my-2 ml-4">
              <b> Kostenlos </b> – Sie können die Einführung jederzeit <br />
              während der ersten 30 Tage gratis buchen.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 mr-4 relative">
        <p className="uppercase text-white absolute right-5">
          Wählen Sie einfach das für Sie <br />
          <b>passende Lernangebot</b>
        </p>
        <div className="absolute -bottom-20 right-3">
          <UnderTextArrow />
        </div>
      </div>
    </div>
  );
}

export default PricingInfoBox;
