import { CardHeader, useTheme } from '@mui/material'
import React from 'react'
import OptionsMenu from '../option-menu'
import { Icon } from '@iconify/react'
import { CardHeaderProps } from './types'



export default function CustomCardHeader({title, action, startIcon, iconOnClick}: CardHeaderProps) {
  const theme = useTheme();
  return (
    <CardHeader
      title={title}
      sx={
        iconOnClick && {
          cursor: 'pointer'
        }
      }
      avatar={<Icon onClick={()=>{
        iconOnClick ? iconOnClick():()=>{}
      }} icon='ic:baseline-keyboard-arrow-left' color={theme.palette.secondary.light} fontSize='1.5rem' />}
      action={
        <OptionsMenu
          options={['Refresh', 'Update', 'Share']}
          iconButtonProps={{ size: 'small', className: 'card-more-options' }}
        />
      }
    />
  )
}
