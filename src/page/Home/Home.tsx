import { FC } from "react";
import Helmet from "react-helmet";

import { MainPageTemplate } from "components";

const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MainPageTemplate>home</MainPageTemplate>
    </>
  );
};

export default Home;
