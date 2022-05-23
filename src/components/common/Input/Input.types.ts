import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
      inputValue: number | string,
      ref?: React.RefObject<HTMLInputElement> | null | undefined,
  }
