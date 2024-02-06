import PropTypes from "prop-types";
//BenefitItem component to render each benefit
function BenefitItem({ icon: Icon, text, isGrey, additionalClass }) {
  return (
    <li className="flex items-center space-x-3 border-b border-gray-medium py-2 pl-8">
      <Icon isGrey={isGrey} />
      <p className={`"leading-[19px]" ${additionalClass}`}>
        {text[0]} <br /> {text[1]}
      </p>
    </li>
  );
}

export default BenefitItem;

BenefitItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  isGrey: PropTypes.bool,
  planType: PropTypes.string,
  additionalClass: PropTypes.string,
};
