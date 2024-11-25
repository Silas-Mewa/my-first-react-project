import { ReactNode } from "react";

interface Props {
  children: ReactNode; //allows for HTML Content
  onPressedClose: () => void;
}
const Alert = ({ children, onPressedClose }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onPressedClose}
      ></button>
    </div>
  );
};

export default Alert;
