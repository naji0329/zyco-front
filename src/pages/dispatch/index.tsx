import { Button, Card, CardContent, Grid } from '@mui/material';

import React, { useState } from 'react'

import OptionsMenu from 'src/@core/components/option-menu';
import AddBookingForm from 'src/@core/components/segments/dispatch/add-booking-form';
import Drivers from 'src/@core/components/segments/dispatch/drivers';
import OwnershipTrip from 'src/@core/components/segments/dispatch/ownership';

const Dispatch = () => {
  
  const [tab, setTab] = useState('add booking');
  const [showOwnership, setShowOwnership] = useState(false);

  const onChangeTab = (newTab: string) => {
    setTab(newTab);
  }

  return (
    <Grid container sx={{minHeight: '100%'}}>
      <Grid item md={5}>
        <Card sx={{height: '100%', width: '100%'}}>
          {
            showOwnership ? (
              <OwnershipTrip setShowOwnership={setShowOwnership} />
            ):(
              <>
                <Grid container sx={{justifyContent: 'space-between', padding: 3, alignItems: 'center'}}>
                  <Grid item> 
                    <Button 
                      variant={tab === 'add booking' ? 'contained':'text'} 
                      color={tab === 'add booking' ? 'primary':'secondary'} 
                      onClick={()=>onChangeTab('add booking')}
                    >ADD BOOKING</Button>
                  </Grid>
                  <Grid item>
                    <Button 
                      variant={tab === 'bookings' ? 'contained':'text'}
                      color={tab === 'bookings' ? 'primary':'secondary'}
                      onClick={()=>onChangeTab('bookings')}
                    >BOOKINGS</Button>
                  </Grid>
                  <Grid item>
                    <Button 
                      variant={tab === 'drivers' ? 'contained':'text'} 
                      color={tab === 'drivers' ? 'primary':'secondary'}
                      onClick={()=>onChangeTab('drivers')}
                    >DRIVERS</Button>
                  </Grid>
                  <Grid item>
                    <OptionsMenu
                      options={['Last 28 Days', 'Last Month', 'Last Year']}
                      iconButtonProps={{ size: 'small', className: 'card-more-options' }}
                    />
                  </Grid>
                </Grid>
                <CardContent sx={{paddingTop: 0}}>
                  {
                    tab === 'add booking' ? <AddBookingForm showOwnership setShowOwnership={setShowOwnership} /> : tab === 'bookings' ? '' :  <Drivers />
                  }
                </CardContent>
              </>
            )
          }
        </Card>
      </Grid>
    </Grid>
  )
}


export default Dispatch;