// COMPONENTS
import TitleProps from "./Title.types";
import { H1Tag } from "./Title.styles";


export const Title = ({
  children,
  style,
}: TitleProps): JSX.Element => {
    return (
      <H1Tag
        style={{ ...style }}
      >
        {children}
      </H1Tag>
    );
};
