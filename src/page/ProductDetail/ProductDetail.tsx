
import { FC } from "react";
import { Grid } from "@material-ui/core";
import {BoxProductDetail} from "./styles"
import { BoxProduct } from "components/Box";

import { CommunityMenuData } from "assets";

const ProductDetail: FC = () => {
  return (
    <div>
			<BoxProductDetail>
				{CommunityMenuData.map((item, index) => (
          <Grid item md={6} xs={12} key={index}>
            <BoxProduct product={item} />
          </Grid>
        ))}
			</BoxProductDetail>
    </div>
  );
};

export default ProductDetail;
