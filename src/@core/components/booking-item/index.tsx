import Icon from 'src/@core/components/icon'
import { Avatar, Box, ListItem, ListItemAvatar, Typography, useTheme } from '@mui/material';
import React from 'react'
import { BookingItemProps } from './types';

export default function BookingItem({startIcon, title, subtitle, startAvatar, children, onClick}: BookingItemProps) {
  console.log(children)
  const theme = useTheme()

  return (
    <>
      <ListItem sx={{margin: 0, padding: 0, justifyContent: 'space-between'}}>
        {
          (startIcon || startAvatar) && (
            <ListItemAvatar sx={{borderRadius: 0, marginRight: 2.5}}>
              {
                startAvatar ? (
                  <Avatar alt='Caroline Black' sx={{ height: 36, width: 36, marginRight: 0 }} src={startAvatar} variant='circular' />):(
                  <Avatar alt='Caroline Black' sx={{ height: 36, width: 36, borderRadius: '5px', marginRight: 0 }}>
                    {
                      startIcon && <Icon icon={startIcon} />
                    }
                  </Avatar>
                )
              }
            </ListItemAvatar>
          )
        }
        <Box sx={{paddingTop: 1}}>
          <Typography fontSize={13} lineHeight={1}>{subtitle}</Typography>
          {
            title ? (
              <Typography fontWeight={600} color={theme.palette.secondary.light}>{title}</Typography>
            ):(
              <>{children}</>
            )
          }
          
        </Box>
        <Box sx={{flex: 1, display: 'flex', justifyContent: 'right'}}>
          <Box 
            onClick={()=>onClick()}
            sx={{
              cursor: 'pointer',
              width: 'fit-content',
              height: 'fit-content'
            }}
          >
            <Icon icon='mdi:chevron-right' color={theme.palette.secondary.light} opacity={.6} />
          </Box>
        </Box>
      </ListItem>
    </>
  )
}
