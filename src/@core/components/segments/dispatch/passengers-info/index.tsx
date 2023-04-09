import React, { useState } from 'react'
import CustomCardHeader from 'src/@core/components/custom-card-header'
import { PassengersInfoProps } from './types'
import { Box, Button, CardContent, Grid, InputAdornment, TextField, Typography, useTheme } from '@mui/material'
import { Icon } from '@iconify/react'
import CustomSelect from 'src/@core/components/select'

export default function PassengersInfo({onBack}: PassengersInfoProps) {
  const theme = useTheme();
  const [showAddPassengerForm, setShowAddPassengerForm] = useState(false);

  return (
    <>
      {
        showAddPassengerForm ? <>
          <Box>
            <Box>
              <CustomCardHeader title='Add passenger' startIcon='ic:baseline-keyboard-arrow-left' onBack={()=>setShowAddPassengerForm(false)} />
              <CardContent>
                <Grid container spacing={5}>
                  <Grid item md={6}>
                    <TextField 
                      label='First Name'
                      size='small' 
                      defaultValue='John'
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField 
                      label='Last Name'
                      size='small' 
                      defaultValue='Doe'
                    />
                  </Grid>
                  <Grid item md={12}>
                    <TextField 
                      label='Phone'
                      size='small'
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={12}>
                    <TextField 
                      label='Email'
                      size='small'
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Box sx={{
                backgroundColor: theme.palette.customColors.tableHeaderBg,
                paddingX: 4,
                paddingY: 3
              }}>
                <Typography sx={{
                  fontSize: '14px',
                  fontWeight: 500
                }}>ADDITIONAL</Typography>
              </Box>
              <CardContent>
                <Grid container spacing={5}>
                  <Grid item md={12}>
                    <CustomSelect 
                      label='Language'
                      id='language'
                      defaultValue={1}
                      menuItems={[
                        {
                          value: 1,
                          text: 'Dutch'
                        }
                      ]}
                      size='small'
                    />
                  </Grid>
                  <Grid item md={12}>
                    <CustomSelect 
                      label='Country'
                      id='country'
                      defaultValue={1}
                      menuItems={[
                        {
                          value: 1,
                          text: 'Netherlands'
                        }
                      ]}
                      size='small'
                    />
                  </Grid>
                  <Grid item md={12}>
                    <TextField 
                      label='Driver Note'
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={12}>
                    <TextField 
                      label='Admin Note'
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Box>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item md={4.8}>
                  <Button
                      variant='outlined'
                      color='secondary'
                      fullWidth
                    >CANCEL</Button>
                </Grid>
                <Grid item md={7.2}>
                  <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                  >SAVE</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Box>
        </>:<>
        <CustomCardHeader title='Passengers info' startIcon='ic:baseline-keyboard-arrow-left' onBack={()=>onBack()} />
        <CardContent>
          <Grid container spacing={4} sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 7,
          }}>
            <Grid item xs={1.5}>
              <Icon icon='material-symbols:person' fontSize={'2.2em'} color={theme.palette.secondary.light} opacity={.4} />
            </Grid>
            <Grid item xs={2.5}>
              <TextField size='small' />
            </Grid>
            <Grid item xs={1.5}>
              <Icon icon='material-symbols:luggage' fontSize={'2.2em'} color={theme.palette.secondary.light} opacity={.4} />
            </Grid>
            <Grid item xs={2.5}>
              <TextField size='small' />
            </Grid>
            <Grid item xs={1.5}>
              <Icon icon='material-symbols:shopping-bag' fontSize={'2.2em'} color={theme.palette.secondary.light} opacity={.4} />
            </Grid>
            <Grid item xs={2.5}>
              <TextField size='small' />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              size='small'
              fullWidth
              label='Find passenger'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Icon icon='ic:baseline-search' fontSize={'1.5em'} />
                  </InputAdornment>
                )
              }}
            />
          </Grid>        
          
        </CardContent>
        <Box sx={{
          backgroundColor: theme.palette.customColors.tableHeaderBg,
          paddingX: 4,
          paddingY: 3
        }}>
          <Typography sx={{
            fontSize: '14px',
            fontWeight: 500
          }}>MAIN PASSENGER</Typography>
        </Box>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item md={6}>
              <TextField 
                label='First Name'
                size='small' 
                defaultValue='John'
              />
            </Grid>
            <Grid item md={6}>
              <TextField 
                label='Last Name'
                size='small' 
                defaultValue='Doe'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size='small'
                fullWidth
                label='Phone'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start' sx={{
                      transform: 'rotate(90deg)'
                    }}>
                      <Icon icon='material-symbols:phone-enabled' fontSize={'1.5em'} />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size='small'
                fullWidth
                label='Email'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='material-symbols:alternate-email' fontSize={'1.5em'} />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4} sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <Grid item xs={1.5}>
                  <Icon icon='material-symbols:luggage' fontSize={'2.2em'} color={theme.palette.secondary.light} opacity={.4} />
                </Grid>
                <Grid item xs={4.5}>
                  <TextField size='small' />
                </Grid>
                <Grid item xs={1.5}>
                  <Icon icon='material-symbols:shopping-bag' fontSize={'2.2em'} color={theme.palette.secondary.light} opacity={.4} />
                </Grid>
                <Grid item xs={4.5}>
                  <TextField size='small' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <Box sx={{
          backgroundColor: theme.palette.customColors.tableHeaderBg,
          paddingX: 4,
          paddingY: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography sx={{
            fontSize: '14px',
            fontWeight: 500
          }}>MAIN PASSENGER</Typography>
          <Button 
            size='small' 
            variant='outlined' 
            color='primary' 
            startIcon={<Icon icon='material-symbols:person-add' fontSize={'1.5em'} color={theme.palette.primary.main} />}
            onClick={()=>setShowAddPassengerForm(true)}
          >
            ADD PASSENGER
          </Button>
        </Box>
        </>
      }
    </>
  )
}
