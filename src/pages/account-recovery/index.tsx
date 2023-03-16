// ** ReactImports
import { ChangeEvent, FormEvent, FormEventHandler, MouseEvent, ReactNode, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
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
import { Alert, Stack } from '@mui/material'
import RecoveryElementButton from 'src/views/components/recovery-element-button'
import { Mail, MobileOff, Settings, SmsFailed } from '@mui/icons-material'
interface State {
  phoneOrEmail: string
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

const AccountRecovery = () => {
  // ** State
  const [values, setValues] = useState<State>({
    phoneOrEmail: ''
  })

  // ** Hook
  const theme = useTheme()

  //router
  const router = useRouter();

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/login-password");
  }
  
  const goPrevious = () => {
    router.back();
  }

  const onBtnClick = (forgottenElement: string) => {
    if(forgottenElement === "email") {
      router.push("/forgot-email");
    }else if(forgottenElement === "password") {
      router.push("/forgot-password");
    }else{
      router.push("/cant-access-phone")
    }
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
              {`Account recovery`}
            </Typography>
            <Typography variant='body2'>Choose what you want to recover</Typography>
          </Box>
          <Stack direction="column" gap={4} mb={7}>
            <RecoveryElementButton color='secondary' variant='outlined' text='Forgot password' onClick={()=>onBtnClick("password")}>
              <Settings />
            </RecoveryElementButton>
            <RecoveryElementButton color='secondary' variant='outlined' text='Forgot email' onClick={()=>onBtnClick("email")}>
              <SmsFailed />
            </RecoveryElementButton>
            <RecoveryElementButton color='secondary' variant='outlined' text={`Can't access phone number`} onClick={()=>onBtnClick("phone")}>
              <Mail />
            </RecoveryElementButton>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={goPrevious} color='secondary' variant='text' startIcon={<Icon icon='mdi:arrow-left' fontSize={20}/>}>
              Previous
            </Button>
          </Box>
        </CardContent>

      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

AccountRecovery.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

AccountRecovery.guestGuard = true

export default AccountRecovery