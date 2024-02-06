import PropTypes from "prop-types";

function Chat({ isGrey }) {
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
          fill={isGrey ? "#D3D3D3" : "#66B8D3"}
          d="M17 32.1C17 38.6 23.3 44 31 44h16s-4.2-2.1-3.5-6.6c.1-.6.3-1.2.6-1.8.5-1.1 1-2.6 1-3.5C45.1 25.5 38.8 20 31 20s-14 5.5-14 12.1z"
        ></path>
        <path
          fill={isGrey ? "#b5b5b5" : "#0088B5"}
          d="M33 29h-7c-.6 0-1-.4-1-1s.4-1 1-1h7c.6 0 1 .4 1 1s-.4 1-1 1zm3 4H26c-.6 0-1-.4-1-1s.4-1 1-1h10c.6 0 1 .4 1 1s-.4 1-1 1zm-2 4h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"
        ></path>
      </g>
    </svg>
  );
}

export default Chat;

Chat.propTypes = {
  isGrey: PropTypes.bool,
};
