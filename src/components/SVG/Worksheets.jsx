import PropTypes from "prop-types";

function Worksheets({ isGrey }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="16 16 32 32"
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="32" cy="32" r="32" fill="#FFF"></circle>

        {/* Conditional statement to display the SVG with different fill colours */}
        <path
          fill={isGrey ? "#D3D3D3" : "#F49999"}
          d="M23.5 19c-.8 0-1.5.7-1.5 1.5v23c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V25l-6-6H23.5z"
        ></path>
        <path
          fill={isGrey ? "#b5b5b5" : "#E66"}
          d="M34 32v-3h-4v3h-2.6l4.6 4 4.5-4zm8-7l-6-6v4.5c0 .8.7 1.5 1.5 1.5H42z"
        ></path>
      </g>
    </svg>
  );
}
export default Worksheets;

Worksheets.propTypes = {
  isGrey: PropTypes.bool,
};
