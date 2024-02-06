import Logo from "../SVG/Logo";
import Hotline from "../SVG/Hotline";

const Header = () => {
  return (
    <div className=" bg-white border-b border-b-secondary px-2">
      <header className="flex items-center mx-auto md:justify-between max-w-[74rem] h-[60px]">
        <Logo />

        {/* Navigation section */}
        <div className="flex space-x-4 grow pl-5">
          <nav className="hidden space-x-6 md:flex md:items-center md:justify-center text-sm font-medium text-black hover:text-gray-dark">
            <a href="#">Schulfächer</a>
            <a href="#">So geht&apos;s</a>
            <a href="#">Für Lehrkräfte & Schulen</a>
            <a href="#">Preise</a>
          </nav>
        </div>

        {/* Hotline section */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="grid place-items-center">
            <Hotline />
          </div>
          <div className="uppercase text-dark-gray ">
            <p className="text-[9px] leading-none ">Telefonberatung</p>
            <p className="text-[13px] leading-none mt-[1px] mb-[2px] ">
              030 - 308 09 651
            </p>
            <p className="text-[9px] leading-none ">Mo-So von 10-16 Uhr</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
