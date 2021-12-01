import { FC } from "react";
import {
  useStyles,
  CustomProductDetail,
  CustomProductDetailLeft,
  CustomProductDetailRight,
  TitleProductDetail,
  AddressProductDetail,
  PriceProductDetail,
  Line,
  Description,
  StartIcon,
  Time,
  AddCart,
} from "./styles";

import { IProductDetail } from "models/types";
import { Button } from "@material-ui/core";
import { useTranslations } from "hooks";

interface IProps {
  productdetail: IProductDetail;
}
const BoxProductDetail: FC<IProps> = ({ productdetail }: IProps) => {
  const classes = useStyles();

  const { i18n } = useTranslations();

  return (
    <div>
      <CustomProductDetail>
        <CustomProductDetailLeft>
          <img
            style={{ width: "100%", height: "250px" }}
            src={
              "https://nhanghitaynguyen.com/wp-content/uploads/2021/01/quan-lau-bo-47.jpg"
            }
          />
        </CustomProductDetailLeft>
        <CustomProductDetailRight>
          <TitleProductDetail>{productdetail.name}</TitleProductDetail>
          <AddressProductDetail>{productdetail.address}</AddressProductDetail>
          <PriceProductDetail>{productdetail.price}</PriceProductDetail>
          <Line></Line>
          <Description>{productdetail.description}</Description>
          <StartIcon></StartIcon>
          <StartIcon></StartIcon>
          <StartIcon></StartIcon>
          <StartIcon></StartIcon>
          <Time>{productdetail.time}</Time>
          <Button size="small" className={classes.addBtnCart}>
            {i18n.t("home_page.button_add")}
          </Button>
          {/* <AddCart>add</AddCart> */}
        </CustomProductDetailRight>
      </CustomProductDetail>
    </div>
  );
};

export default BoxProductDetail;
