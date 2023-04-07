// ** ReactImports
import { ChangeEvent, FormEvent, ReactNode, useEffect, useRef, useState } from 'react'

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
import { useAuth } from 'src/hooks/useAuth'
import { validatePhoneNumber, validateRequired } from 'src/@core/utils/validator'

interface State {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  firstNameError: string,
  lastNameError: string,
  phoneNumberError: string
}

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

const CreateAccountTwo = () => {
    // ** Hook
    const theme = useTheme()
    const auth = useAuth();

  // ** State
  const [firstName, setFirstName] = useState(auth.authUser.firstName || '');
  const [lastName, setLastName] = useState(auth.authUser.lastName || '');
  const [phoneNumber, setPhoneNumber] = useState(auth.authUser.phoneNumber || '');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitData, setSubmitData] = useState(false);

  //router
  const router = useRouter();

  const isFirstRender = useRef(true);

  useEffect(()=>{
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }
    if(!firstNameError && !lastNameError && !phoneNumberError) {
      const authUser = auth.authUser;
      auth.register({firstName, lastName, phoneNumber, email: authUser.email, username: authUser.username, password: authUser.password})
    }
  }, [submitData])

  const handleChange = (event: ChangeEvent<HTMLInputElement>, errorProp: keyof State) => {
    if(formSubmitted) {
      if(errorProp === 'firstNameError') {
        setFirstNameError(validateRequired("First name", event.target.value).message)
      }else if(errorProp === 'lastNameError'){
        setLastNameError(validateRequired("Last name", event.target.value).message)
      }else {
        if(validateRequired('Phone number', phoneNumber).message) {
          setPhoneNumberError(validateRequired('Phone number', event.target.value).message)
        }else{
          setPhoneNumberError(validatePhoneNumber(event.target.value).message)
        }
      }
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    if(validateRequired("First name", firstName).error === true) {
      setFirstNameError(validateRequired("First name", firstName).message)
    }
    
    if(validateRequired("Last name", lastName).error === true) {
      setLastNameError(validateRequired("Last name", lastName).message)
    }

    if(validateRequired("Phone number", phoneNumber).error === true) {
      setPhoneNumberError(validateRequired("Phone number", phoneNumber).message)
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
              {`Create account`}
            </Typography>
            <Typography variant='body2'>Create your Zyco account</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField 
              autoFocus 
              fullWidth id='firstName' 
              label='First name' 
              sx={{ mb: 4 }} 
              value={firstName}
              onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                setFirstName(e.target.value);
                handleChange(e, "firstNameError")
              }}
              error={firstNameError ? true:false}
              helperText={firstNameError}
            />
            <TextField 
              autoFocus 
              fullWidth 
              id='lastName' 
              label='Last name' 
              sx={{ mb: 4 }} 
              value={lastName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setLastName(e.target.value);
                handleChange(e, "lastNameError")
              }}
              error={lastNameError ? true:false}
              helperText={lastNameError}
            />
            <TextField 
              autoFocus 
              fullWidth 
              id='phoneNumber' 
              label='Phone number with country code(+123)' 
              sx={{ mb: 4 }} 
              value={phoneNumber}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPhoneNumber(e.target.value);
                handleChange(e, "phoneNumberError")
              }}  
              error={phoneNumberError ? true:false}
              helperText={phoneNumberError}
            />

            <Box
              sx={{ mb: 4 }}
            >
              <FormControlLabel
                label='i Agree to privacy policy & terms'
                control={<Checkbox />}
                sx={{ '& .MuiFormControlLabel-label': { color: 'text.primary' } }}
              />
            </Box>

            <Grid item xs={12} mt={7}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 7 }}>
                <Button onClick={goPrevious} color='secondary' variant='text' startIcon={<Icon icon='mdi:arrow-left' fontSize={20}/>}>
                  Previous
                </Button>
                <Button type='submit' color='primary' variant='contained' endIcon={<Icon icon='mdi:arrow-right' fontSize={20} />}>
                  {auth.loading ? 'Loading...':'Next'}
                </Button>
              </Box>
            </Grid>

            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography sx={{ mr: 2, color: 'text.secondary' }}>Already have an account?</Typography>
              <Typography
                component={Link}
                href='/login-email'
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                Sign in instead
              </Typography>
            </Box>
            
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

CreateAccountTwo.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

CreateAccountTwo.guestGuard = true

export default CreateAccountTwo
