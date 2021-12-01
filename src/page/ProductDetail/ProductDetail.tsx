import { FC } from "react";
import { BoxProductDetailPage, Wrapper, Suggest } from "./styles";
import { BoxProductDetail } from "components/Box";
import Cart from "page/Home/Cart";
import { ProductDetailData } from "assets";
import { MainPageTemplate } from "components";
import CommunityMenu from "page/Home/CommunityMenu";

const ProductDetail: FC = () => {
  return (
    <div>
      <MainPageTemplate>
        <Wrapper>
          <BoxProductDetailPage>
            {ProductDetailData.map((item, index) => (
              <BoxProductDetail productdetail={item} />
            ))}
          </BoxProductDetailPage>
          <Cart></Cart>
          <Suggest>
            <CommunityMenu></CommunityMenu>
          </Suggest>
        </Wrapper>
      </MainPageTemplate>
    </div>
  );
};

export default ProductDetail;
