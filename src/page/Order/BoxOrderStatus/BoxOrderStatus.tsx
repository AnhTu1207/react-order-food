import React, { FC } from "react";
import { Card, CardContent, Typography, Box } from "@material-ui/core";
import {
  ListAltOutlined,
  TodayOutlined,
  LocationOnOutlined,
} from "@material-ui/icons";

import { useTranslations } from "hooks";
import CustomizedSteppers from "./CustomizedStepper";

import { Map } from "components";
import { BoxOrderItem } from "components/Box";

import {
  BoxInfoStore,
  CardHeader,
  InfoText,
  useStyles,
  Info,
  BoxGoogleMap,
} from "./style";

import { CommunityMenuData } from "assets";

const BoxOrderStatus: FC = () => {
  const classes = useStyles();
  const { i18n } = useTranslations();
  const API_GOOGLE_MAP = "AIzaSyAde3G0Ta_o80ngeqg5HSe4R8zY8b2wREs";
  return (
    <>
      <Card>
        <CardHeader>
          <Typography className={classes.orderStatus}>
            {i18n.t("order_page.order_status")}
          </Typography>
          <Info>
            <ListAltOutlined />
            <InfoText>
              {i18n.t("order_page.title")}
              #122222
            </InfoText>
          </Info>
        </CardHeader>
        <CardContent className={classes.cardContent}>
          <BoxInfoStore>
            <img
              src="https://images.foody.vn/res/g109/1086178/prof/s640x400/file_restaurant_photo_kdri_16267-e566fcc3-210720095637.jpg"
              alt=""
              className={classes.storeAvatar}
            />
            <Box className={classes.restaurantBox}>
              <Typography className={classes.restaurantName}>
                {CommunityMenuData[3].store.name}
              </Typography>
              <Box>
                <Info>
                  <TodayOutlined />
                  <InfoText>24/11/2021 7:22PM</InfoText>
                </Info>
                <Info>
                  <LocationOnOutlined />
                  <InfoText noWrap> {CommunityMenuData[0].store.name}</InfoText>
                </Info>
              </Box>
            </Box>
          </BoxInfoStore>
          <BoxGoogleMap>
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_GOOGLE_MAP}&callback=initMap`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div className={classes.boxMap} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </BoxGoogleMap>
        </CardContent>
        <Box>
          <CustomizedSteppers />
        </Box>
      </Card>
      <BoxOrderItem />
    </>
  );
};

export default BoxOrderStatus;
