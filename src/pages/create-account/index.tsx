// ** ReactImports
import { ChangeEvent, FormEvent, MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustrationsV1'
import { useRouter } from 'next/router'
import { FormHelperText } from '@mui/material'
import { useAuth } from 'src/hooks/useAuth'
import { validateEmail, validatePassword, validateRequired } from 'src/@core/utils/validator'

interface State {
  username: string,
  email: string,
  password: string,
  usernameError: string,
  emailError: string,
  passwordError: string,
  showPassword: boolean,
  formSubmitted: boolean
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: 450 }
}))

const CreateAccount = () => {
  const auth = useAuth()
  
  // ** State
  const [username, setUsername] = useState(auth.authUser.username || '');
  const [email, setEmail] = useState(auth.authUser.email || '');
  const [password, setPassword] = useState(auth.authUser.password || '');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const [submitData, setSubmitData] = useState(false);

  // ** Hook
  const theme = useTheme()

  //router
  const router = useRouter();

  //avoid useEffect from running on first mount(render)

  const isFirstRender = useRef(true);

  useEffect(()=>{
    if (isFirstRender.current) {
      isFirstRender.current = false;
      
      return;
    }
    if(!passwordError && !emailError && !usernameError) {
      auth.createAccountNext({username, email, password, firstName: auth.authUser.firstName, lastName: auth.authUser.lastName, phoneNumber: auth.authUser.phoneNumber});
      router.push("/create-account-2")
    }
  }, [submitData])

  const handleChange = (event: ChangeEvent<HTMLInputElement>, errorProp: keyof State) => {
    if(formSubmitted) {
      if(errorProp === 'passwordError') {
        setPasswordError(validatePassword(event.target.value).message)
      }else if(errorProp === 'emailError'){
        if(validateRequired("email", event.target.value).message) {
          setEmailError(validateRequired("email", event.target.value).message)
        }else{
          setEmailError(validateEmail(event.target.value).message);
        }
        
      }else {
        setUsernameError(validateRequired("username", event.target.value).message)
      }
    }
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(validatePassword(password).error === true) {
      setPasswordError(validatePassword(password).message)
    }
    if(validateRequired('email',email).error === true) {
      if(validateRequired('email', email).message) {
        setEmailError(validateRequired('email', email).message)
      }else{
        setEmailError(validateEmail('email').message)
      }
    }
    if(validateRequired('username', username).error === true) {
      setUsernameError(validateRequired('username', username).message)
    }
    setSubmitData(!submitData)
  }
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
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
              fullWidth 
              value={username}
              id='username' 
              label='Username' 
              sx={{ mb: 4 }} 
              name='username'
              onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                setUsername(e.target.value);
                handleChange(e, "usernameError")
              }}
              error={usernameError ? true:false}
              helperText={usernameError}
            />
            <TextField 
              autoFocus 
              fullWidth 
              value={email}
              id='email' 
              label='Email' 
              sx={{ mb: 4 }} 
              name='email'
              onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                setEmail(e.target.value);
                handleChange(e, "emailError")
              }}
              error={emailError ? true:false}
              helperText={emailError}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={password}
                id='auth-login-password'
                onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                  setPassword(e.target.value);
                  handleChange(e, "passwordError")
                }}
                type={showPassword ? 'text' : 'password'}
                error={passwordError ? true: false}

                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                    </IconButton>
                  </InputAdornment>
                }
              />
              {passwordError && (
                <FormHelperText error id="auth-login-password-error">
                  {passwordError}
                </FormHelperText>
              )}
            </FormControl>
            <Button type="submit" fullWidth size='large' variant='contained' sx={{ mb: 7, mt: 4 }}>
              NEXT
            </Button>
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

CreateAccount.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

CreateAccount.guestGuard = true

export default CreateAccount
