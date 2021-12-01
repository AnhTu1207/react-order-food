import { FC } from "react";
import { Grid } from "@material-ui/core";
import { BoxProductDetailPage, Wrapper } from "./styles";
import { BoxProductDetail } from "components/Box";

import { ProductDetailData } from "assets";

const ProductDetail: FC = () => {
  return (
    <div>
      <Wrapper>
        <BoxProductDetailPage>
          {ProductDetailData.map((item, index) => (
            <BoxProductDetail productdetail={item} />
          ))}
        </BoxProductDetailPage>
      </Wrapper>
    </div>
  );
};

export default ProductDetail;
