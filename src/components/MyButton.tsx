import { BaseSyntheticEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "close"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onButtonPressed?: (event: BaseSyntheticEvent) => void;
}

const MyButton = ({ children, onButtonPressed, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onButtonPressed}>
      {children}
    </button>
  );
};

export default MyButton;
