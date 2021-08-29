import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import { TagsList } from 'assets';
import {map} from 'lodash';
import { TapStyled, Wrapper } from './styles';
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
	},
	indicator: {
		background: "var(--color-primary)",
    
	},
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Wrapper>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          
          variant="fullWidth"
					aria-label="full width tabs example"
					classes={{
						indicator: classes.indicator
			
					}}>
					{map(TagsList, (item, index) => (
						<TapStyled label={item.name} {...a11yProps(index)}  key={index} />
					))}
        </Tabs>
      </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>

        </TabPanel>
      </SwipeableViews>
    </Wrapper>
  );
}
