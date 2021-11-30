import { FC, ReactNode } from "react";

import Header from "./Header";
import { Wrapper, Content } from "./styles";

interface IProps {
  children: ReactNode;
}

const MainPageTemplate: FC<IProps> = ({ children }: IProps) => {
  return (
    <Wrapper>
      <Header onClickMenu={() => {}} />
      <Content elevation={0}>{children}</Content>
    </Wrapper>
  );
};

export default MainPageTemplate;
