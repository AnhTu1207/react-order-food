import { Grid } from "@material-ui/core";
import BoxProduct from "components/Container/BoxProduct";
import { Title } from "./styles";
import { FC } from "react";
import { CommunityMenuData } from "assets/temporaryData";

const CommunityMenu: FC = () => {
  return (
    <div>
      <Title>Community Menu</Title>
      <Grid container spacing={2}>
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
