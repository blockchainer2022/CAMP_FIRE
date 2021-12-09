import "./style.css";

export const ButtonOutline = ({ children, ...props }) => (
  <button {...props} className=" btn-outline">
    {children}
  </button>
);

export const ButtonPrimary = ({ children, ...props }) => (
  <button {...props} className=" btn-primary">
    {children}
  </button>
);
export const ButtonWhite = ({ children, ...props }) => (
  <button {...props} className=" btn-white">
    {children}
  </button>
);
