// ** ReactImports
import { ChangeEvent, FormEvent, ReactNode, useState } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustrationsV1'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import { validateRequired } from 'src/@core/utils/validator'
import { useAuth } from 'src/hooks/useAuth'

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: 450 }
}))

const ForgotPassword = () => {

  // ** Hook
  const theme = useTheme()
  const auth = useAuth();

  // ** State
  const [phoneOrEmail, setPhoneOrEmail] = useState(auth.resetUser.phoneOrEmail || '');
  const [phoneOrEmailError, setPhoneOrEmailError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitData, setSubmitData] = useState(false);

  //router
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneOrEmail(event.target.value);
    if(formSubmitted) {
      setPhoneOrEmailError(validateRequired("Phone or email", event.target.value).message)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    if(validateRequired("Phone or email", phoneOrEmail).error === true) {
      setPhoneOrEmailError(validateRequired("Phone or email", phoneOrEmail).message)

      return;
    }else{
      auth.handleForgotPasswordNext({
        phoneOrEmail: phoneOrEmail,
        code: auth.resetUser.code,
        new_password: auth.resetUser.new_password
      });
    }

    setSubmitData(!submitData)


  }

  const goPrevious = () => {
    router.back();
  }
  
  return (
    <Box className='content-center'>
      <Card sx={{zIndex: 1}}>
        <CardContent sx={{ p: theme => `${theme.spacing(13, 7, 6.5)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={47} fill='none' height={26} viewBox='0 0 268 150' xmlns='http://www.w3.org/2000/svg'>
              <rect
                rx='25.1443'
                width='50.2886'
                height='143.953'
                fill={theme.palette.primary.main}
                transform='matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)'
              />
              <rect
                rx='25.1443'
                width='50.2886'
                height='143.953'
                fillOpacity='0.4'
                fill='url(#paint0_linear_7821_79167)'
                transform='matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)'
              />
              <rect
                rx='25.1443'
                width='50.2886'
                height='143.953'
                fill={theme.palette.primary.main}
                transform='matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)'
              />
              <rect
                rx='25.1443'
                width='50.2886'
                height='143.953'
                fill={theme.palette.primary.main}
                transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
              />
              <rect
                rx='25.1443'
                width='50.2886'
                height='143.953'
                fillOpacity='0.4'
                fill='url(#paint1_linear_7821_79167)'
                transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
              />
              <rect
                rx='25.1443'
                width='50.2886'
                height='143.953'
                fill={theme.palette.primary.main}
                transform='matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)'
              />
              <defs>
                <linearGradient
                  y1='0'
                  x1='25.1443'
                  x2='25.1443'
                  y2='143.953'
                  id='paint0_linear_7821_79167'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop />
                  <stop offset='1' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  y1='0'
                  x1='25.1443'
                  x2='25.1443'
                  y2='143.953'
                  id='paint1_linear_7821_79167'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop />
                  <stop offset='1' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
            <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
              {themeConfig.templateName}
            </Typography>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ mb: 1.5, fontWeight: 600, letterSpacing: '0.18px' }}>
              {`Forgot Password? 🔒`}
            </Typography>
            <Typography variant='body2'>Enter your phone number or email and we'll send you instructions to reset your password</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField 
              fullWidth 
              id='phoneOrEmail' 
              label='Phone or email' 
              sx={{ mb: 4 }} 
              value={phoneOrEmail}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              error={phoneOrEmailError ? true:false}
              helperText={phoneOrEmailError}
            />
            
            <Grid item xs={12} mt={7}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 7 }}>
                <Button onClick={goPrevious} color='secondary' variant='text' startIcon={<Icon icon='mdi:arrow-left' fontSize={20}/>}>
                  Previous
                </Button>
                <Button type='submit' color='primary' variant='contained' endIcon={<Icon icon='mdi:arrow-right' fontSize={20} />}>
                  Next
                </Button>
              </Box>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

ForgotPassword.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

ForgotPassword.guestGuard = true

export default ForgotPassword
