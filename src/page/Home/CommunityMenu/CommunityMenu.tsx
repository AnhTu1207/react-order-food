import { FC, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { map } from "lodash";

import { useTranslations } from "hooks";
import { useGetFoods } from "api/food";

import { BoxProduct, Spinner } from "components";
import { Title } from "./styles";

const CommunityMenu: FC = () => {
  const { i18n } = useTranslations();
  const {
    isLoading: fetchingFoods,
    runRequest: fetchFoods,
    responseData: foods,
  } = useGetFoods({});

  useEffect(() => {
    fetchFoods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Title>{i18n.t("home_page.community_menu_title")}</Title>
      {fetchingFoods ? (
        <div>
          <Spinner color="var(--color-primary)" center />
        </div>
      ) : (
        <>
          <Grid container spacing={4}>
            {map(foods?.data, (item, index) => (
              <Grid item md={6} xs={12} key={index}>
                <BoxProduct product={item} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default CommunityMenu;
