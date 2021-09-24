import { FC } from "react";
import { IContentHome } from "models/types";
// import { ContentHomeData } from "assets/temporaryData/ContentHome";

import {
  BoxImgStyled,
  BoxImgDetailStyled,
  BoxStyled,
  TypoDetailStyled,
  TypoStyled,
} from "./styles";

interface IProps {
  contentHome: IContentHome;
}
const ContentHome: FC<IProps> = ({ contentHome }: IProps) => {
  // const { i18n } = useTranslations();
  return (
    <div>
      <BoxStyled>
        <TypoStyled>{contentHome.decriptionsDetail}</TypoStyled>
        <TypoDetailStyled></TypoDetailStyled>
        {/* <BoxImgStyled>
          <BoxImgDetailStyled></BoxImgDetailStyled>
        </BoxImgStyled> */}
      </BoxStyled>
    </div>
  );
};
export default ContentHome;
