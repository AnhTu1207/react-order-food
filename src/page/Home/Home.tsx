import { FC } from "react";
import Helmet from "react-helmet";

import { useTranslations } from "hooks";
import { MainPageTemplate } from "components";
import Tags from "./Tags";
import Cart from "./Cart";
import CommunityMenu from "./CommunityMenu";

const Home: FC = () => {
  const { i18n } = useTranslations();
  return (
    <>
      <Helmet>
        <title>{i18n.t("home_page.title")}</title>
      </Helmet>
      <MainPageTemplate>
        <Tags />
        <Cart />
        <CommunityMenu />
      </MainPageTemplate>
    </>
  );
};

export default Home;
