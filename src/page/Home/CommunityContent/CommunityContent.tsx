import { Grid } from "@material-ui/core";
import { ContentHome } from "components/Content";
// import { map } from "lodash";
import { FC } from "react";
import { BoxStyled } from "./style";

import { ContentHomeData } from "assets";

const CommunityContent: FC = () => {
  return (
    <div>
      <BoxStyled>
        <Grid container spacing={6}>
          {ContentHomeData.map((item, index) => (
            <Grid item key={index}>
              <ContentHome contenthome={item} />
            </Grid>
          ))}
        </Grid>
      </BoxStyled>
    </div>
  );
};
export default CommunityContent;
