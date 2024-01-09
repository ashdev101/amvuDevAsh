import React from 'react'
interface ButtonPropTypes {
    text: string,
    mt?:string,
    ml?:string,


}
const Button: React.FC<ButtonPropTypes> = ({ text,mt,ml }) => {
    return (
        <button className={"2xl:px-[30px] xl:px-[29px] lg:px-[25px] md:px-[20px] sm:px-[15px] px-[13px]   2xl:py-[14px] xl:py-[13px] lg:py-[13px] md:py-[13px] sm:py-[10px] py-[7px]  2xl:text-[18px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[13px] text-[11px] text-[#FFFFFF] bg-[#FD0808] font-[700]"} style={{ borderRadius: "20px 3px",marginTop:mt,marginLeft:ml }}>
            {text}
        </button>
    )
}

export default Button
