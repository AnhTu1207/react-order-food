import { FC } from "react";
import Helmet from "react-helmet";

import { useTranslations } from "hooks";
import { MainPageTemplate } from "components";
import Tags from "./Tags";

const Home: FC = () => {
  const { i18n } = useTranslations();

  return (
    <>
      <Helmet>
        <title>{i18n.t("home_page.title")}</title>
      </Helmet>
      <MainPageTemplate>
        <Tags />
        123
      </MainPageTemplate>
    </>
  );
};

export default Home;
