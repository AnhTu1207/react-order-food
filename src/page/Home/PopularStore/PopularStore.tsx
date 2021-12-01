import { FC } from "react";
import { Grid } from "@material-ui/core";

import { useTranslations } from "hooks";
import { BoxStore } from "components/Box";
import { Title } from "./styles";
import { Stores } from "assets";

const PopularStore: FC = () => {
  const { i18n } = useTranslations();

  return (
    <div>
      <Title>{i18n.t("home_page.popular_store")}</Title>
      <Grid container spacing={4}>
        {Stores.map((store, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <BoxStore store={store} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PopularStore;
