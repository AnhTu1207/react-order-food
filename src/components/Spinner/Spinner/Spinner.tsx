import { FC } from "react";

import { SpinnerStyled, SpinnerContainer } from "./styles";

type Props = {
  color?: string;
  size?: number;
  center?: boolean;
};
const Spinner: FC<Props> = ({ color, size, center }: Props) => {
  return (
    <SpinnerContainer center={center}>
      <SpinnerStyled bgColor={color || "#FFF"} size={size}  />
    </SpinnerContainer>
  );
};

export default Spinner;
