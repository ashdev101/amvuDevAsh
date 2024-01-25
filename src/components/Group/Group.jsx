/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Group = ({ className, maskgroupClassName, maskgroup = "/img/maskgroup.png" }) => {
  return (
    <div className={`inline-flex flex-col items-center gap-[14px] relative bg-[#f5f7fa] rounded-[10px] ${className}`}>
      <img className={`relative w-[111.41px] h-[99px] ${maskgroupClassName}`} alt="Maskgroup" src={maskgroup} />
      <div className="relative w-[62.35px] [font-family:'Overpass',Helvetica] font-normal text-[#090f47] text-[13px] tracking-[0] leading-[18px]">
        Sugar <br />
        Substitute
      </div>
    </div>
  );
};

Group.propTypes = {
  maskgroup: PropTypes.string,
};
