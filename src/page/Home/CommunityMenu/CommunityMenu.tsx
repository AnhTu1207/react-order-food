import { FC, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { map } from "lodash";

import { useGetFoods } from "api/food";

import { BoxProduct, Spinner } from "components";

const CommunityMenu: FC = () => {
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
