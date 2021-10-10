import { FC, ReactNode, useState } from "react";

import Header from "./Header";
import Drawer from "./Drawer";
import { Wrapper, Content } from "./styles";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const MainPageTemplate: FC<IProps> = ({ children }: IProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Header onClickMenu={() => setOpen(true)} />
      <Drawer open={open} onOpen={() => {}} onClose={() => setOpen(false)} />
      <Content elevation={0}>{children}</Content>
      <Footer></Footer>
    </Wrapper>
  );
};

export default MainPageTemplate;
