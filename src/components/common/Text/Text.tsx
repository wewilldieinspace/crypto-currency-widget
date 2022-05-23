// COMPONENTS
import TextProps from "./Text.types";
import { Element } from "./Text.styles";

const getFontSize = (size: string) => {
  switch (size) {
    case "s":
      return "16px";
    case "n":
      return "20px";
    default:
      return size.includes("px") ? size : `${size}px`;
  }
};

export const Text = ({
  size = "n",
  color = "gray",
  children,
  style,
}: TextProps): JSX.Element => {
  const fontSize = getFontSize(size);
  return (
    <Element
      style={{ ...style }}
      size={fontSize}
      color={color}
    >
      {children}
    </Element>
  );
};
