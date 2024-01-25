/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const EntryField = ({ className, divClassName, text = "First name" }) => {
  return (
    <div className={`inline-flex flex-col items-start gap-[4px] relative ${className}`}>
      <div
        className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-body-text text-[14px] tracking-[-0.28px] leading-[19.6px] whitespace-nowrap ${divClassName}`}
      >
        {text}
      </div>
      <div className="relative w-[358px] h-[48px] rounded-[5px] border border-solid border-strokes" />
    </div>
  );
};

EntryField.propTypes = {
  text: PropTypes.string,
};
