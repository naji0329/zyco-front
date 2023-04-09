import React, { ChangeEvent, useState } from 'react'
import CustomCardHeader from 'src/@core/components/custom-card-header'
import { Box, CardContent, FormControlLabel, Grid, InputAdornment, Radio, RadioGroup, TextField, Typography, useTheme } from '@mui/material'
import { Icon } from '@iconify/react'
import CustomSelect from 'src/@core/components/select'
import { PaymentProps } from './types'

export default function PassengersInfo({onBack}: PaymentProps) {
  const theme = useTheme();
  const [paymentMode, setPaymentMode] = useState<string>('By meter')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPaymentMode((event.target as HTMLInputElement).value)
  }

  return (
  <>
    <CustomCardHeader title='Payment' startIcon='ic:baseline-keyboard-arrow-left' onBack={()=>onBack()} />
    <CardContent>
      <Grid container>
        <Grid item xs={12} sx={{my: 4}}>
          <CustomSelect 
            label='Payment type'
            id='payment-type'
            defaultValue={1}
            menuItems={[
              {
                value: 1,
                text: 'Default'
              }
            ]}
            size='small'
            
          />
        </Grid>  
          <Grid item xs={12}>
            <RadioGroup row={true} aria-label='payment-by' name='payment-by' value={paymentMode} onChange={handleChange}> 
              <FormControlLabel value='By meter' control={<Radio />} label='By meter' sx={{mr: 7}} />
              <FormControlLabel value='Fixed' control={<Radio />} label='Fixed' />
            </RadioGroup>
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
      }}>PAYMENT TYPE</Typography>
    </Box>
    <CardContent>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TextField
            size='small'
            fullWidth
            label='Name'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon icon='material-symbols:person-outline' fontSize={'1.5em'} />
                </InputAdornment>
              )
            }}
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
      paddingY: 3
    }}>
      <Typography sx={{
        fontSize: '14px',
        fontWeight: 500
      }}>COMMISION</Typography>
      
    </Box>
      <CardContent>
        <CustomSelect 
          label='Commision'
          id='commision'
          defaultValue={1}
          menuItems={[
            {
              value: 1,
              text: 'Default'
            }
          ]}
          size='small'
          
        />
      </CardContent>
    </>
  )
}
