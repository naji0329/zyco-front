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

const RecoveryElementButton = ({variant, children, text, onClick}: Props) => {
  const theme = useTheme()
  const [isHovering, setIsHovering] = useState(false);
  const RecoveryElementButtonStyled = styled(Button) (()=>({
    display: 'flex',
    justifyContent: 'left',
    padding: 20,
    gap: 10
  }))

  return (gi
    <RecoveryElementButtonStyled 
      sx={{
        backgroundColor: theme.palette.grey[100]
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