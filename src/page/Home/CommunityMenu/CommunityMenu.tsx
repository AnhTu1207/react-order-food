import { FC } from "react";
import { Grid } from "@material-ui/core";

import { useTranslations } from "hooks";
import { BoxProduct } from "components/Box";
import { Title } from "./styles";

import { CommunityMenuData } from "assets";

const CommunityMenu: FC = () => {
  const { i18n } = useTranslations();
  return (
    <div>
      <Title>{i18n.t("home_page.community_menu_title")}</Title>
      <Grid container spacing={4}>
        {CommunityMenuData.map((item, index) => (
          <Grid item md={6} xs={12} key={index}>
            <BoxProduct product={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CommunityMenu;
