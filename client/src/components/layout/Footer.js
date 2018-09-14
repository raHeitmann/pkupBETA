import React from "react";

const divStyle = {
  backgroundColor: "navy"
};

export default () => {
  return (
    <footer
      className="background-navy text-white mt-5 p-4 text-center"
      style={divStyle}
    >
      Copyright &copy; {new Date().getFullYear()} PKUP
    </footer>
  );
};
