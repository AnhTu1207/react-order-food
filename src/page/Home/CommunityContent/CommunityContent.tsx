import { Grid, Box } from "@material-ui/core";
import { ContentHome } from "components/Content";
import { FC } from "react";
import { BoxStyled } from "./style";

import { ContentHomeData } from "assets";

const CommunityContent: FC = () => {
  return (
    <div>
      <BoxStyled>
        <Box>
          {ContentHomeData.map((item, index) => (
            <Grid item key={index}>
              <ContentHome contenthome={item} />
            </Grid>
          ))}
        </Box>
      </BoxStyled>
    </div>
  );
};
export default CommunityContent;
