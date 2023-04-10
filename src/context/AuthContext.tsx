// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import { AuthValuesType, RegisterParams, LoginParams, UserDataType, ResetParams } from './types'
import { Auth } from 'aws-amplify'
import { toast } from 'react-hot-toast'
import getError from 'src/@core/utils/get-toast-error'

// ** Defaults
const defaultProvider: AuthValuesType = {
  loginUser: {
    phoneOrEmail: '',
    password: '',
    rememberMe: false
  },
  authUser: {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  },
  resetUser: {
    phoneOrEmail: '',
    code: '',
    new_password: ''
  },
  setAuthUser: () => null,
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  resetPassword: () => Promise.resolve(),
  createAccountNext: () => null,
  loginNext: () => null,
  handleForgotPasswordNext: () => null
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States

  const [user, setUser] = useState<UserDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const [defaultAuthUser, setDefaultAuthUser] = useState<any>(null);
  const [defaultLoginUser, setDefaultLoginUser] = useState<any>(null);
  const [defaultResetUser, setDefaultResetUser] = useState<any>(null);
  useEffect(()=>{
    if(typeof window != undefined) {
      setDefaultAuthUser(window.localStorage.getItem("authUser"))
      setDefaultLoginUser(window.localStorage.getItem("loginUser"))
      const userJson = localStorage.getItem("userData");
      setUser(userJson !== null ? JSON.parse(userJson):null);
      setDefaultResetUser(window.localStorage.getItem("resetUser"));
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
    password: defaultLoginUser && (JSON.parse(defaultLoginUser ? defaultLoginUser:'')).password || '',
    rememberMe: defaultLoginUser && (JSON.parse(defaultLoginUser ? defaultLoginUser:'')).rememberMe || false
  })

  const [resetUser, setResetUser] = useState<ResetParams>({
    phoneOrEmail: defaultResetUser && (JSON.parse(defaultResetUser ? defaultResetUser:'')).phoneOrEmail || '',
    code: defaultResetUser && (JSON.parse(defaultResetUser ? defaultResetUser:'')).code || '',
    new_password: defaultResetUser && (JSON.parse(defaultResetUser ? defaultResetUser:'')).new_password || '',
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

  //logout user when closes the browser window
  useEffect(() => {
    const handleBeforeUnload = async (e: BeforeUnloadEvent) => {
      e.preventDefault();
      const rememberMe = await JSON.parse((localStorage.getItem('rememberMe') || ''));
      if(!rememberMe) {
        localStorage.clear();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleLogin = async (params: LoginParams) => {
    setLoading(true);

    try{
      const userCredentials:any = {
        username: params.phoneOrEmail,
        password: params.password
      }
      const user = await Auth.signIn(userCredentials);
      const dbUser = {
        id: user.attributes.sub,
        firstName: user.attributes.family_name,
        lastName: user.attributes.given_name,
        username: user.attributes.nickname,
        email: user.attributes.email,
        phoneNumber: user.attributes.phoneNumber,
        role: 'admin'
      }
      setUser(dbUser);
      localStorage.setItem("userData", JSON.stringify(dbUser))
      localStorage.setItem('rememberMe', JSON.stringify(params.rememberMe))
      router.push("/");
    }catch(error) {
      console.log(error)
      toast.error(getError(`${error}`));
    }
    setLoading(false)
  }

  const handleLogout = () => {
    setUser(null)
    // window.localStorage.removeItem('userData')
    // window.localStorage.removeItem(authConfig.storageTokenKeyName)
    window.localStorage.clear();
    router.push('/login-email')
  }

  const handleRegister = async (params: RegisterParams) => {
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

  const handleCreateAccountNext = (params: RegisterParams) => {
    setAuthUser({...authUser, ...params})
    localStorage.setItem("authUser", JSON.stringify({...authUser, ...params}));
  }

  const handleLoginNext = (params: LoginParams) => {
    setLoginUser({...loginUser, ...params});
    localStorage.setItem("loginUser", JSON.stringify({...loginUser, ...params}));
  }

  const handleForgotPasswordNext = async (params: ResetParams) => {
    setResetUser({...resetUser, ...params});
    localStorage.setItem("resetUser", JSON.stringify({...resetUser, ...params}));
    try{
      setLoading(true)
      await Auth.forgotPassword(params.phoneOrEmail);
      toast.success("Verification code sent");
      router.push("/reset-password");
    }catch(error) {
      toast.error(getError(`${error}`));
    }
    setLoading(false);
  }

  const resetPassword = async (params: ResetParams) => {
    try{
      console.log("reset")
      console.log(params);
      setLoading(true);
      const res = await Auth.forgotPasswordSubmit(params.phoneOrEmail, params.code, params.new_password);
      router.push("/login-email");
      toast.success(res);
    }catch(error) {
      toast.error(getError(`${error}`))
    }
    setLoading(false);
  }

  const values = {
    loginUser,
    authUser,
    setAuthUser,
    resetUser,
    user,
    loading,
    setUser,
    setLoading,
    handleForgotPasswordNext,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
    resetPassword,
    createAccountNext: handleCreateAccountNext,
    loginNext: handleLoginNext, 
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
