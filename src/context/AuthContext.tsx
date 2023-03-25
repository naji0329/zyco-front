// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import { AuthValuesType, RegisterParams, LoginParams, ErrCallbackType, UserDataType } from './types'
import { Auth } from 'aws-amplify'
import { toast } from 'react-hot-toast'
import { Message } from '@mui/icons-material'
import getError from 'src/@core/utils/get-toast-error'

// ** Defaults
const defaultProvider: AuthValuesType = {
  loginUser: {
    phoneOrEmail: '',
    password: ''
  },
  authUser: {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  },
  setAuthUser: () => null,
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  createAccountNext: () => null,
  loginNext: () => null
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const [defaultAuthUser, setDefaultUser] = useState<any>(null);
  const [defaultLoginUser, setDefaultLoginUser] = useState<any>(null);
  useEffect(()=>{
    if(typeof window != undefined) {
      setDefaultUser(window.localStorage.getItem("authUser"))
      setDefaultLoginUser(window.localStorage.getItem("loginUser"))
    }
  }, [])
  
  const [authUser, setAuthUser] = useState<RegisterParams>({
    username: defaultAuthUser && (JSON.parse(defaultAuthUser ? defaultAuthUser:'')).username || '',
    email: defaultAuthUser && (JSON.parse(defaultAuthUser ? defaultAuthUser:'')).email || '',
    password: defaultAuthUser && (JSON.parse(defaultAuthUser ? defaultAuthUser:'')).password || '',
    firstName: defaultAuthUser && (JSON.parse(defaultAuthUser ? defaultAuthUser:'')).firstName || '',
    lastName: defaultAuthUser && (JSON.parse(defaultAuthUser ? defaultAuthUser:'')).lastName || '',
    phoneNumber: defaultAuthUser && (JSON.parse(defaultAuthUser ? defaultAuthUser:'')).phoneNumber || ''
  });

  const [loginUser, setLoginUser] = useState<LoginParams>({
    phoneOrEmail: defaultLoginUser && (JSON.parse(defaultLoginUser ? defaultLoginUser:'')).phoneOrEmail || '',
    password: defaultLoginUser && (JSON.parse(defaultLoginUser ? defaultLoginUser:'')).password || ''
  })

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
      if (storedToken) {
        setLoading(true)
        await axios
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: storedToken
            }
          })
          .then(async response => {
            setLoading(false)
            setUser({ ...response.data.userData })
          })
          .catch(() => {
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            setUser(null)
            setLoading(false)
            if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
              router.replace('/login')
            }
          })
      } else {
        setLoading(false)
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
    setLoading(true);
    try{
      console.log(params)
      const user = await Auth.signIn({
        username: params.phoneOrEmail,
        password: params.password
      })
      const dbUser = {
        id: user.attributes.sub,
        firstName: user.attributes.family_name,
        lastName: user.attributes.given_name,
        username: user.attributes.nickname,
        email: user.attributes.email,
        phoneNumber: user.attributes.phoneNumber,
        role: 'client'
      }
      setUser(dbUser);
      localStorage.setItem("userData", JSON.stringify(dbUser))
      router.push("/");
    }catch(error) {
      console.log(error)
      toast.error(getError(`${error}`));
    }
    setLoading(false)
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleRegister = async (params: RegisterParams, errorCallback?: ErrCallbackType) => {
    try {
      setAuthUser({...authUser, ...params})
      localStorage.setItem("authUser", JSON.stringify(params));
      setLoading(true);
        const { user } = await Auth.signUp({
            username: params.email || params.phoneNumber,
            password: params.password,
            attributes: {
              given_name: params.firstName,
              family_name: params.lastName,
              phone_number: params.phoneNumber,
              email: params.email,
              nickname: params.username
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
              enabled: true,
            }
        });
        if(user) {
          setLoading(false);
          router.push(`/two-step-v`);
        }
    } catch (error) {
      console.log(error);
      toast.error(getError(`${error}`));
      setLoading(false);
    }
    setLoading(false)
  }

  const handleCreateAccountNext = (params: RegisterParams, errorCallback?: ErrCallbackType) => {
    setAuthUser({...authUser, ...params})
    localStorage.setItem("authUser", JSON.stringify({...authUser, ...params}));
  }

  const handleLoginNext = (params: LoginParams) => {
    setLoginUser({...loginUser, ...params});
    localStorage.setItem("loginUser", JSON.stringify({...loginUser, ...params}));
  }

  const values = {
    loginUser,
    authUser,
    setAuthUser,
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
    createAccountNext: handleCreateAccountNext,
    loginNext: handleLoginNext
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
