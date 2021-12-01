import { FC } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { LocalOffer } from "@material-ui/icons";

import { useHistory } from "react-router-dom";
import { useTranslations } from "hooks";
import { IStore } from "models/types";

import { CustomButton, useStyles } from "./styles";

interface IProps {
  store: IStore;
}

const BoxStore: FC<IProps> = ({ store }: IProps) => {
  const classes = useStyles();
  const { i18n } = useTranslations();
  const history = useHistory();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={store.name}
            height="140"
            image={store.avatar}
            title={store.name}
          />
          <CardContent onClick={() => history.push("/productdetail")}>
            <Typography gutterBottom variant="h6" component="h2" noWrap>
              {store.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" noWrap>
              {store.address}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <CustomButton startIcon={<LocalOffer />}>
            {i18n.t("home_page.sale_off_menu")}
          </CustomButton>
        </CardActions>
      </Card>
    </>
  );
};

export default BoxStore;
