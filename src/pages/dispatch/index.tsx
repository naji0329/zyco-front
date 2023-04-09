import { Icon } from '@iconify/react';
import { Box, Button, Card, Grid, Typography, useTheme } from '@mui/material';

import React, { useState } from 'react'
import CustomButtonGroup from 'src/@core/components/custom-button-group';

import OptionsMenu from 'src/@core/components/option-menu';
import SearchInput from 'src/@core/components/search-input';
import AddBookingForm from 'src/@core/components/segments/dispatch/add-booking-form';
import DispatchTo from 'src/@core/components/segments/dispatch/dispatch-to';
import Drivers from 'src/@core/components/segments/dispatch/drivers';
import OwnershipTrip from 'src/@core/components/segments/dispatch/ownership';
import PassengersInfo from 'src/@core/components/segments/dispatch/passengers-info';
import Payment from 'src/@core/components/segments/dispatch/payment';
import Vehicle from 'src/@core/components/segments/dispatch/vehicle';

const Dispatch = () => {
  
  const theme = useTheme()
  const [tab, setTab] = useState('add booking');
  const [bookingItemShown, setBookingItemShown] = useState('default');

  const onChangeTab = (newTab: string) => {
    setTab(newTab);
  }

  const changeBookingItem = (newItem: string) => {
    setBookingItemShown(newItem);
  }

  const onBack = () => {
    setBookingItemShown('default');
  }

  return (
    <Grid container sx={{minHeight: '90vh', backgroundImage: 'url(/images/google_map.png)', backgroundSize: 'cover', backgroundPosition: 'center'}} spacing={5}>
      <Grid item md={5} xs={12}>
        <Card sx={{height: '100%', width: '100%'}}>
          {
            bookingItemShown === 'default' && (
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
              {/* <CardContent sx={{paddingTop: 0}}> */}
                {
                  tab === 'add booking' ? <AddBookingForm changeBookingItem={changeBookingItem} /> : tab === 'bookings' ? '' :  <Drivers />
                }
              {/* </CardContent> */}
            </>
            )
          }
          {
            bookingItemShown === 'Booking ownership' && <OwnershipTrip onBack={()=>onBack()} />
          }
          {
            bookingItemShown === 'Dispatch' && <DispatchTo onBack={()=>onBack()} />
          }
          {
            bookingItemShown === 'Passengers info' && <PassengersInfo onBack={()=>onBack()} />
          }
          {
            bookingItemShown === 'Payment' && <Payment onBack={()=>onBack()} />
          }
          {
            bookingItemShown === 'Basic vehicle' && <Vehicle onBack={()=>onBack()}  />
          }
        </Card>
      </Grid>
      <Grid item xs={7}>
        <Grid container spacing={2.5}>
          <Grid item xs={5}>
            <Box sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: '6px',
              position: 'relative'
            }}>
              <CustomButtonGroup />
              
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: '6px',
            }}>
              <SearchInput borderLess />
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: '6px'
            }}>
              <Button 
                sx={{backgroundColor: theme.palette.background.paper}} 
                fullWidth 
                endIcon={<Icon icon='material-symbols:filter-list' fontSize='1.5rem' color={theme.palette.secondary.main} opacity={.54} />}
              >
                <Typography sx={{opacity: .54}}>
                  Filter
                </Typography>
              </Button>
            </Box>  
          </Grid>
          <Grid item>
            <button
              style={{
                outline: 'none',
                border: `none`,
                borderRadius: '6px',
                width: '36px',
                height: '36px',
                backgroundColor: theme.palette.background.paper
              }}
            >
              <Icon icon='material-symbols:more-vert' fontSize='1.5rem' color={theme.palette.secondary.light} opacity={.87} />
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}


export default Dispatch;
