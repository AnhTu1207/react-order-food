import { FC } from "react";
import { BoxContent, Decriptions, DecriptionsDetaial, Img } from "./style";

import { IContentHome } from "models/types";

interface IProps {
  contenthome: IContentHome;
}

const ContentHome: FC<IProps> = ({ contenthome }: IProps) => {
  return (
    <div>
      <BoxContent>
        <Decriptions>{contenthome.decriptions}</Decriptions>
        <DecriptionsDetaial>{contenthome.decriptionsDetail}</DecriptionsDetaial>
        <Img>
          {/* {contenthome.imgUrlContent} */}
          <img src="https://shopeefood.vn/app/assets/img/Box-food-preservation-footer.png?82adfd2ec19091256d09a94dac77aaba" />
        </Img>
      </BoxContent>
    </div>
  );
};
export default ContentHome;
