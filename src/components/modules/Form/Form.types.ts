import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Currency } from "../../../types/Currency";

export interface FormProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}


  export interface ExchangeInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
    currentValue: Currency,
    items: Currency[],
    amount: number | null,
    changeAmountHandler: (value: number) => void,
    searchHandler: (val: string) => void,
}
