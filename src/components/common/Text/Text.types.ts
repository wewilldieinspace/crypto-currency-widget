import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  color?: string;
  size?: string;
  alignCenter?: boolean;
}
