import React from 'react'
import CustomCardHeader from 'src/@core/components/custom-card-header';
import { VehicleProps } from './types';
import { Box, CardContent, Tab, Tabs } from '@mui/material';
import TabPanel from 'src/@core/components/tab-panel';

function Vehicle({onBack}: VehicleProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <CustomCardHeader title='Vehicle type' startIcon='ic:baseline-keyboard-arrow-left' onBack={()=>onBack()} />
      <CardContent>
        <Box>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example"
            indicatorColor="primary"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              "& .MuiTab-root": {
                flexGrow: 1,
                maxWidth: "none",
              },
            }}
          >
            
            <Tab label="SALOON" {...a11yProps(0)} />
            <Tab label="ESTATE" {...a11yProps(1)} />
            <Tab label="MINIVAN" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          SALOON
        </TabPanel>
        <TabPanel value={value} index={1}>
          ESTATE
        </TabPanel>
        <TabPanel value={value} index={2}>
          MINIVAN
        </TabPanel>
      </CardContent>
    </>
  )
}

export default Vehicle;