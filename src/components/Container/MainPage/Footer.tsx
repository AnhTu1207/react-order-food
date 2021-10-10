import { useTranslations } from "hooks";
import { FC } from "react";
import {
  ClearBox,
  CustomFacebookIcon,
  CustomFooter,
  CustomFooter_Element,
  CustomInstagramIcon,
  CustomTitle,
  CustomTitleStyle,
  Title_company,
  Title_Portal,
  Title_Portal_Style,
  useStyles,
} from "./styles";

import { Logo } from "components";

const Footer: FC = () => {
  const classes = useStyles();
  const { i18n } = useTranslations();
  return (
    <div className={classes.root}>
      <CustomFooter>
        <CustomFooter_Element>
          {i18n.t("footer.title_company")}
          <CustomTitle>
            <Title_company>
              {i18n.t("footer.title_company_detail_1")}
            </Title_company>
            <Title_company>
              {i18n.t("footer.title_company_detail_2")}
            </Title_company>
            <Title_company>
              {i18n.t("footer.title_company_detail_3")}
            </Title_company>
            <Title_company>
              {i18n.t("footer.title_company_detail_4")}
            </Title_company>
            <Title_company>
              {i18n.t("footer.title_company_detail_5")}
            </Title_company>
            <Title_company>
              {i18n.t("footer.title_company_detail_6")}
            </Title_company>
          </CustomTitle>
        </CustomFooter_Element>
        <CustomFooter_Element>
          {i18n.t("footer.title_app")}
        </CustomFooter_Element>
        <CustomFooter_Element>
          <Logo margin="30px 0 0 0"></Logo>
          <Title_Portal>{i18n.t("footer.title_portal")}</Title_Portal>
          <CustomFacebookIcon></CustomFacebookIcon>
          <CustomInstagramIcon></CustomInstagramIcon>
        </CustomFooter_Element>
        <CustomFooter_Element>
          <CustomTitleStyle>{i18n.t("footer.title_pay")}</CustomTitleStyle>
        </CustomFooter_Element>
        <CustomFooter_Element>
          <CustomTitleStyle>{i18n.t("footer.title_address")}</CustomTitleStyle>
          <Title_Portal_Style>
            {i18n.t("footer.title_address_detail_2")}
          </Title_Portal_Style>
        </CustomFooter_Element>
        <ClearBox></ClearBox>
      </CustomFooter>
    </div>
  );
};

export default Footer;
