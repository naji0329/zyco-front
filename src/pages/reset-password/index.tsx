// ** ReactImports
import { ChangeEvent, FormEvent, MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

// ** Third party imports
import Cleave from 'cleave.js/react'

// ** styles
import 'cleave.js/dist/addons/cleave-phone.us'

// ** util imports
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
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
import CleaveWrapper from 'src/@core/styles/libs/react-cleave'
import { useAuth } from 'src/hooks/useAuth'
import { validatePassword } from 'src/@core/utils/validator'
import { FormHelperText } from '@mui/material'
import { ResetParams } from 'src/context/types'

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: 450 }
}))

const defaultValues: { [key: string]: string } = {
  val1: '',
  val2: '',
  val3: '',
  val4: '',
  val5: '',
  val6: ''
}

const CleaveInput = styled(Cleave)(({ theme }) => ({
  maxWidth: 50,
  textAlign: 'center',
  height: '50px !important',
  fontSize: '150% !important',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '&:not(:last-child)': {
    marginRight: theme.spacing(2)
  },
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    margin: 0,
    WebkitAppearance: 'none'
  }
}))

const ResetPassword = () => {

    // ** Hook
    const auth = useAuth()
    const theme = useTheme()
    const {
      control,
      formState: { errors }
    } = useForm({ defaultValues })

  // ** State
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitData, setSubmitData] = useState(false);
  const [resetCode, setResetCode] = useState('');

  const [isBackspace, setIsBackspace] = useState<boolean>(false)
  const isFirstRender = useRef(true);

  useEffect(()=>{
    if (isFirstRender.current) {
      isFirstRender.current = false;
      
      return;
    }
    if(!newPasswordError) {
      const params: ResetParams = {
        phoneOrEmail: auth.resetUser.phoneOrEmail,
        code: resetCode,
        new_password: newPassword
      }
      auth.resetPassword(params);
    }
  }, [submitData])

  const handleChange = (event: ChangeEvent, onChange: (...event: any[]) => void) => {
    if (!isBackspace) {
      onChange(event)

      // @ts-ignore
      const form = event.target.form
      const index = [...form].indexOf(event.target)
      if (form[index].value && form[index].value.length) {
        form.elements[index + 1].focus()
      }
      event.preventDefault()
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace') {
      setIsBackspace(true)

      // @ts-ignore
      const form = event.target.form
      const index = [...form].indexOf(event.target)
      if (index >= 1) {
        if (!(form[index].value && form[index].value.length)) {
          form.elements[index - 1].focus()
        }
      }
    } else {
      setIsBackspace(false)
    }
  }

  const renderInputs = () => {

    return Object.keys(defaultValues).map((val, index) => (
      <Controller
        key={val}
        name={val}
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Box
            type='tel'
            maxLength={1}
            value={value}
            autoFocus={index === 0}
            component={CleaveInput}
            onKeyDown={(event)=>handleKeyDown(event)}
            onChange={(event: ChangeEvent) => handleChange(event, onChange)}
            options={{ blocks: [1], numeral: true, numeralPositiveOnly: true }}
            sx={{ [theme.breakpoints.down('sm')]: { px: `${theme.spacing(2)} !important` } }}
          />
        )}
      />
    ))
  }

  // ** Vars
  const errorsArray = Object.keys(errors)

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleNewPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewPassword(event.target.value);
    if(formSubmitted === true) {
      setNewPasswordError((validatePassword(event.target.value)).message);
    }
  }

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let code = "";
    for (const key in control._fields) {
      code += control._fields[key]?._f.value;
    }
    setResetCode(code);
    setFormSubmitted(true);

    if(validatePassword(newPassword).error === true) {
      setNewPasswordError(validatePassword(newPassword).message);
    }
    setSubmitData(!submitData)
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
              {`Reset Password 🔒`}
            </Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={submitForm}>
          <Typography variant='body2'>Type your verification code here</Typography>
          <CleaveWrapper
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 2,
                ...(errorsArray.length && {
                  '& .invalid:focus': {
                    borderColor: theme => `${theme.palette.error.main} !important`,
                    boxShadow: theme => `0 1px 3px 0 ${hexToRGBA(theme.palette.error.main, 0.4)}`
                  }
                })
              }}
            >
              {renderInputs()}
            </CleaveWrapper>
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>New Password</InputLabel>
              <OutlinedInput
                label='New Password'
                value={newPassword}
                id='auth-login-password'
                onChange={(e: ChangeEvent<HTMLInputElement>)=>handleNewPasswordChange(e)}
                type={showNewPassword ? 'text' : 'password'}
                error={newPasswordError ? true:false}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={()=>setShowNewPassword(!showNewPassword)}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      <Icon icon={showNewPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                    </IconButton>
                  </InputAdornment>
                }
              />
              {newPasswordError && (
                <FormHelperText error id="auth-login-password-error">
                  {newPasswordError}
                </FormHelperText>
              )}
            </FormControl>
            <Button type="submit" fullWidth size='large' variant='contained' sx={{ mb: 7, mt: 4 }}>
              Confirm
            </Button>
            
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

ResetPassword.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

ResetPassword.guestGuard = true

export default ResetPassword
