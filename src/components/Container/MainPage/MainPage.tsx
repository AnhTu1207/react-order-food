import { FC, ReactNode, useState } from "react";

import Header from "./Header";
import Drawer from "./Drawer";
import { Wrapper, Content } from "./styles";

interface IProps {
  children: ReactNode;
}

const MainPageTemplate: FC<IProps> = ({ children }: IProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Header onClickMenu={() => setOpen(true)} />
      <Drawer open={open} onOpen={() => {}} onClose={() => setOpen(false)} />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default MainPageTemplate;
