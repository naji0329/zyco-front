// ** Next Import
import React, { useState } from 'react'

// ** MUI Components
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'

interface Props {
  color: string,
  variant: "text"|"outlined"|"contained",
  children: React.ReactNode,
  text: string,
  onClick: () => void
}

const RecoveryElementButton = ({color, variant, children, text, onClick}: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const RecoveryElementButtonStyled = styled(Button) (({theme})=>({
    display: 'flex',
    justifyContent: 'left',
    padding: 20,
    gap: 10,
    backgroundColor: '#f6f6f6'
  }))
  return (
    <RecoveryElementButtonStyled 
      sx={{
        backgroundColor: '#f6f6f7'
      }}
      variant={variant} 
      color={isHovering ? 'primary':'secondary'} 
      onMouseOver={()=>setIsHovering(true)} 
      onMouseOut={()=>setIsHovering(false)}
      onClick={onClick}
    >
      {children}
      <Typography

        sx={{
          textTransform: "lowercase",
          "&:first-letter": {
            textTransform: "capitalize"
          }
        }}
      >{text}</Typography>
    </RecoveryElementButtonStyled>
  )
}
export default RecoveryElementButton;