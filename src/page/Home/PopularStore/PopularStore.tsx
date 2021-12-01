import { FC } from "react";
import { Grid } from "@material-ui/core";

import { BoxStore } from "components/Box";
import styles from "./styles";

import { Stores } from "assets";


const PopularStore: FC = () => {
  const classes = styles();

  return (
    <div className={classes.wrapper}>
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
