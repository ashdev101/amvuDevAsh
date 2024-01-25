
type buttonProp = {
  className?: string
  type?: "submit" | "button" | "reset"
  isDisabled?: boolean
  label : string 
  onClick? : () => void
}

export const LoginButton = ({ className, type, isDisabled , label , onClick }: buttonProp) => {
  return (
    <button
    onClick={onClick}
      disabled={isDisabled}
      type={type}
      className={`text-center min-w-max px-3 w-full sm:w-[45%] h-[48px] bg-rose-400 rounded-[5px] ${className}`}>
      <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-[14px] tracking-[-0.28px] leading-[normal]">
        {label}
      </span>
    </button>
  );
};
