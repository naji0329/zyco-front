import Icon from 'src/@core/components/icon'
import { Avatar, Box, Button, CardContent, Divider, Grid, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemSecondaryAction, Switch, TextField, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import DatePickerWrapper from 'src/@core/components/date-picker-wrapper';
import DatePicker from 'react-datepicker'
import { AddBookingFormTypes } from './types';
import { BookingItemProps } from 'src/@core/components/booking-item/types';
import BookingItem from 'src/@core/components/booking-item';

const AddBookingForm = ({changeBookingItem}: AddBookingFormTypes) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState<Date | null | undefined>(new Date())
  const theme = useTheme()
  
  const bookingOwnership: BookingItemProps = {
    title: 'Me',
    subtitle: 'Booking ownership',
    startIcon: 'material-symbols:account-tree',
    onClick: () => changeBookingItem('Booking ownership')
  }
  const dispatchTo: BookingItemProps = {
    title: 'To myself',
    subtitle: 'Dispatch',
    startAvatar: '/images/avatars/1.png',
    onClick: () => changeBookingItem('Dispatch')
  }
  const payment: BookingItemProps = {
    title: 'Cash | By meter',
    subtitle: 'Payment',
    onClick: () => changeBookingItem('Payment')
  }
  const basicVehicle: BookingItemProps = {
    title: 'Saloon',
    subtitle: 'Basic vehicle',
    startIcon: 'material-symbols:local-taxi',
    onClick: () => changeBookingItem('Basic vehicle')
  }
  const passengersInfo: BookingItemProps = {
    subtitle: 'Passengers info',
    startIcon: 'ic:baseline-info',
    onClick: () => changeBookingItem('Passengers info')
  }

  

  return (
    <>
      <CardContent>
      <List sx={{marginTop: 0}}>
        <BookingItem 
          {...bookingOwnership}
        />
      </List>
      <Box sx={{display: 'flex', justifyContent: 'right'}}>
        <Box sx={{
          my: 5
        }}>
          <Switch size='small' />
          <Typography component='span'>Return trip</Typography>
        </Box>
      </Box>
      <DatePickerWrapper>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                size='small'
                fullWidth
                label='Find Account'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='ic:baseline-search' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Pickup'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='ic:baseline-location-on' color={theme.palette.success.main} />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container sx={{justifyContent: 'space-between', px: 3}}>
                <Grid item sx={{display: 'flex', gap: 3}}>
                  <Icon icon='material-symbols:swap-calls' color={theme.palette.secondary.light} fontSize={'1.5em'} opacity={.4} />
                  <Typography sx={{
                    color: theme.palette.secondary.main,
                    opacity: .6
                  }}>80 km</Typography>
                  <Icon icon='material-symbols:timer-outline' color={theme.palette.secondary.light} fontSize={'1.5rem'} opacity={.4} />
                  <Typography sx={{
                    color: theme.palette.secondary.main,
                    opacity: .6
                  }}>84 min</Typography>
                </Grid>
                <Grid item sx={{display: 'flex', gap: 3}}>
                  <Icon icon='material-symbols:add' color={theme.palette.primary.main} fontSize={'1.5em'} />
                  <Typography sx={{
                    color: theme.palette.primary.main,
                  }}>VIA</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Drop-ff'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='ic:baseline-location-on' color={theme.palette.error.main} />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={6}>
                <Grid item xs={6}>
                <DatePicker
                  id='date-picker'
                  dateFormat='yyyy-MM-dd'
                  value={'' + date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()}
                  onChange={(date: Date) => setDate(date)}
                  customInput={
                    <TextField
                      fullWidth
                      size='small'
                      label='Date'
                      value={date}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <Icon icon='material-symbols:calendar-today' />
                          </InputAdornment>
                        )
                      }}
                    />
                  }
                />
                  
                </Grid>
                <Grid item xs={6}>
                  <DatePicker
                    showTimeSelect
                    selected={time}
                    timeIntervals={15}
                    showTimeSelectOnly
                    dateFormat='h:mm aa'
                    id='time-only-picker'
                    onChange={(date: Date) => setTime(date)}
                    customInput={
                      <TextField
                          fullWidth
                          size='small'
                          label='Time'
                          value={time}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position='end'>
                                <Icon icon='ic:baseline-access-time' />
                              </InputAdornment>
                            )
                          }}
                        />
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <List sx={{marginTop: 0, padding: 0}}>
                <BookingItem 
                  {...passengersInfo}
                >
                  <Grid container spacing={6}>
                    <Grid item sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                      <Icon icon='material-symbols:person' color={theme.palette.secondary.light} opacity={.4} />
                      <Typography sx={{ opacity:.4}}>1</Typography>
                    </Grid>
                    <Grid item sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                      <Icon icon='material-symbols:luggage' color={theme.palette.secondary.light} opacity={.4} />
                      <Typography sx={{ opacity:.4}}>0</Typography>
                    </Grid>
                    <Grid item sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                      <Icon icon='material-symbols:shopping-bag' color={theme.palette.secondary.light} opacity={.4} />
                      <Typography sx={{ opacity:.4}}>0</Typography>
                    </Grid>
                  </Grid>
                </BookingItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <BookingItem 
                {...basicVehicle}
              />
            </Grid>
            <Grid item xs={12}>
              <List>
                <BookingItem 
                  {...payment}
                />
                <Divider />
                <BookingItem 
                  {...dispatchTo}
                />
              </List>
              <Grid item xs={12}>
                <Button variant='contained' color='primary' fullWidth>DISPATCH</Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </DatePickerWrapper>
      </CardContent>
    </>
  )
}
export default AddBookingForm;