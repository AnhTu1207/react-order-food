import { FC } from "react";
import Helmet from "react-helmet";

import { useTranslations } from "hooks";
import { MainPageTemplate } from "components";
import Tags from "./Tags";
import CommunityMenu from "./CommunityMenu";
import ContentHome from "./ContentHome";

const Home: FC = () => {
  const { i18n } = useTranslations();

  return (
    <>
      <Helmet>
        <title>{i18n.t("home_page.title")}</title>
      </Helmet>
      <MainPageTemplate>
        <Tags />
        <CommunityMenu />
        <ContentHome />
      </MainPageTemplate>
    </>
  );
};

export default Home;
