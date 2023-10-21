import { ButtonProps } from "./types";

const Button = ({ title, variant, onClick = () => {} }: ButtonProps) => {
  const colorsStyle = variant === "primary" ? "bg-sky-600" : "bg-blue-400";
  return (
    <button
      onClick={onClick}
      className={`${colorsStyle} text-white py-2 px-5 rounded-full`}
    >
      {title}
    </button>
  );
};

export default Button;
