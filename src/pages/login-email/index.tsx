// ** ReactImports
import { ChangeEvent, FormEvent, ReactNode, SyntheticEvent, useEffect, useRef, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustrationsV1'
import { useRouter } from 'next/router'
import { validateRequired } from 'src/@core/utils/validator'
import { useAuth } from 'src/hooks/useAuth'

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: 450 }
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginEmailPage = () => {

  // ** Hook
  const theme = useTheme()
  const auth = useAuth()

  // ** State
  const [phoneOrEmail, setPhoneOrEmail] = useState(auth.loginUser.phoneOrEmail || '');
  const [phoneOrEmailError, setPhoneOrEmailError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  //helps in useEffect to know form has been submitted successfully
  const [submitData, setSubmitData] = useState(false);

  //router
  const router = useRouter();

  const isFirstRender = useRef(true);

  useEffect(()=>{
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }
    if(!phoneOrEmailError) {
      const loginUser = auth.loginUser;
      auth.loginNext({phoneOrEmail: phoneOrEmail, password: loginUser.password, rememberMe: rememberMe})
      router.push("/login-password")
    }
  }, [submitData])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneOrEmail(e.target.value);
    if(formSubmitted) {
      setPhoneOrEmailError(validateRequired("Phone or email", phoneOrEmail).message);
    }
  }

  const handleCheckboxChange = (e: SyntheticEvent<Element, Event>, checked: boolean) => {
    setRememberMe(checked);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormSubmitted(true)
    if(validateRequired("Phone or email", phoneOrEmail).error === true) {
      setPhoneOrEmailError(validateRequired("Phone or email", phoneOrEmail).message);
    }
    setSubmitData(!submitData);
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
              {`Sign in`}
            </Typography>
            <Typography variant='body2'>Please sign-in to your Zyco account</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField 
              autoFocus 
              fullWidth 
              value={phoneOrEmail}
              onChange={(e: ChangeEvent<HTMLInputElement>)=>handleChange(e)}
              id='phoneOrEmail' 
              label='Phone or email' 
              error={phoneOrEmailError ? true:false}
              helperText={phoneOrEmailError}
              sx={{ mb: 4 }} />
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <FormControlLabel
                label='Remember Me'
                control={<Checkbox />}
                sx={{ '& .MuiFormControlLabel-label': { color: 'text.primary' } }}
                onChange={handleCheckboxChange}
                checked={rememberMe}
              />
              <Typography
                variant='body2'
                component={Link}
                href='/account-recovery'
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                Can't login
              </Typography>
            </Box>
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
              NEXT
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography sx={{ mr: 2, color: 'text.secondary' }}>New on our platform?</Typography>
              <Typography
                component={Link}
                href='/create-account'
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                Create an account
              </Typography>
            </Box>
            
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

LoginEmailPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

LoginEmailPage.guestGuard = true

export default LoginEmailPage
