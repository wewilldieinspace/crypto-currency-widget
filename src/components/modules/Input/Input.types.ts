import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Currency } from "../../../types/Currency";

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
    currencyList: Currency[];
    amount: string;
    activeCurrency: number;
  }