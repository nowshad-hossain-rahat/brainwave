
const MenuSvg = ({ openNavigation }: { openNavigation?: boolean }) => {
  return (
    <svg
      className="menu-svg"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className="rect"
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      <rect
        className="rect"
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
