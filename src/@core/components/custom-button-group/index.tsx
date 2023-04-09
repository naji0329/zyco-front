import { Button, ButtonGroup, useTheme } from '@mui/material'
import React from 'react'

function CustomButtonGroup() {
  const theme = useTheme();
  return (
    <ButtonGroup fullWidth>
      <Button sx={{paddingY: '7px', paddingX: '22px', borderRight: `1px solid ${theme.palette.primary.main} !important`}} variant='contained'>ALL</Button>
      <Button sx={{paddingY: '7px', paddingX: '22px', borderRight: `1px solid ${theme.palette.primary.main} !important`}} variant='text' color='secondary'>ONLINE</Button>
      <Button sx={{paddingY: '7px', paddingX: '22px'}} variant='text' color='secondary'>BUSY</Button>
    </ButtonGroup>
  )
}

export default CustomButtonGroup