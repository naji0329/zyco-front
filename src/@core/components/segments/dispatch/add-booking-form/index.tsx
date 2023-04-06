import Icon from 'src/@core/components/icon'
import { Avatar, Box, Button, Divider, Grid, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemSecondaryAction, Switch, TextField, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import DatePickerWrapper from 'src/@core/components/date-picker-wrapper';
import DatePicker from 'react-datepicker'
import { AddBookingFormTypes } from './types';

const AddBookingForm = ({setShowOwnership}: AddBookingFormTypes) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState<Date | null | undefined>(new Date())
  const theme = useTheme()
  
  return (
    <>
      <List sx={{marginTop: 0}}>
        <ListItem sx={{margin: 0, padding: 0}}>
          <ListItemAvatar sx={{borderRadius: 0, backgroundColor: 'red', marginRight: 2.5}}>
            <Avatar alt='Caroline Black' sx={{ height: 36, width: 36, borderRadius: 0, marginRight: 0 }}>
              <Icon icon='material-symbols:account-tree' />
            </Avatar>
          </ListItemAvatar>
          <Box sx={{paddingTop: 1}}>
            <Typography fontSize={13} lineHeight={1}>Booking ownership</Typography>
            <Typography fontWeight={600} color={theme.palette.secondary.light}>Me</Typography>
          </Box>
          <ListItemSecondaryAction sx={{marginRight: 0, paddingRight: 0, marginLeft: 'auto'}}>
            <IconButton edge='end' sx={{paddingRight: 0}} onClick={()=>setShowOwnership(true)}>
              <Icon icon='mdi:chevron-right' color={theme.palette.secondary.light} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem> 
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
                <ListItem sx={{margin: 0, padding: 0}}>
                  <ListItemAvatar sx={{borderRadius: 0, marginRight: 2.5}}>
                    <Avatar alt='Caroline Black' sx={{ height: 36, width: 36, borderRadius: 0, marginRight: 0 }}>
                      <Icon icon='material-symbols:account-tree' />
                    </Avatar>
                  </ListItemAvatar>
                  <Box sx={{paddingTop: 1}}>
                    <Typography fontSize={13} lineHeight={1}>Passengers info</Typography>
                    <Grid container spacing={6}>
                      <Grid item sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                        <Icon icon='material-symbols:person' color={theme.palette.secondary.light} />
                        <Typography>1</Typography>
                      </Grid>
                      <Grid item sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                        <Icon icon='material-symbols:luggage' color={theme.palette.secondary.light} />
                        <Typography>0</Typography>
                      </Grid>
                      <Grid item sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                        <Icon icon='material-symbols:shopping-bag' color={theme.palette.secondary.light} />
                        <Typography>0</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <ListItemSecondaryAction>
                    <IconButton edge='end' sx={{paddingRight: 0}}>
                      <Icon icon='mdi:chevron-right' color={theme.palette.secondary.light} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem> 
                <ListItem sx={{margin: 0, padding: 0, marginTop: 5}}>
                  <ListItemAvatar sx={{borderRadius: 0, backgroundColor: 'red', marginRight: 2.5}}>
                    <Avatar alt='Caroline Black' sx={{ height: 36, width: 36, borderRadius: 0, marginRight: 0 }}>
                      <Icon icon='material-symbols:local-taxi' />
                    </Avatar>
                  </ListItemAvatar>
                  <Box sx={{paddingTop: 1}}>
                    <Typography fontSize={13} lineHeight={1}>Basic vehicle</Typography>
                    <Typography fontWeight={600} color={theme.palette.secondary.light}>Saloon</Typography>
                  </Box>
                  <ListItemSecondaryAction>
                    <IconButton edge='end' sx={{paddingRight: 0}}>
                      <Icon icon='mdi:chevron-right' color={theme.palette.secondary.light} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem> 
              </List>
            </Grid>
              <Grid item xs={12}>
                <List>
                  <ListItem sx={{margin: 0, padding: 0, marginTop: 5}}>
                    <Box sx={{paddingTop: 1}}>
                      <Typography fontSize={13} lineHeight={1}>Payment</Typography>
                      <Typography fontWeight={600} color={theme.palette.secondary.light}>Cash | By meter</Typography>
                    </Box>
                    <ListItemSecondaryAction>
                      <IconButton edge='end' sx={{paddingRight: 0}}>
                        <Icon icon='mdi:chevron-right' color={theme.palette.secondary.light} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{margin: 0, padding: 0, marginTop: 5}}>
                    <ListItemAvatar sx={{borderRadius: 0, backgroundColor: 'red', marginRight: 2.5}}>
                      <Avatar alt='Caroline Black' sx={{ height: 36, width: 36, borderRadius: 0, marginRight: 0 }} src='' />
                    </ListItemAvatar>
                    <Box sx={{paddingTop: 1}}>
                      <Typography fontSize={13} lineHeight={1}>Dispatch</Typography>
                      <Typography fontWeight={600} color={theme.palette.secondary.light}>To myself</Typography>
                    </Box>
                    <ListItemSecondaryAction>
                      <IconButton edge='end' sx={{paddingRight: 0}}>
                        <Icon icon='mdi:chevron-right' color={theme.palette.secondary.light} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem> 
                </List>
                <Grid item xs={12}>
                  <Button variant='contained' color='primary' fullWidth>DISPATCH</Button>
                </Grid>
              </Grid>
          </Grid>
        </form>
      </DatePickerWrapper>
    </>
  )
}
export default AddBookingForm;