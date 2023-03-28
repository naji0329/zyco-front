export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  phoneOrEmail: string,
  password: string
}

export type RegisterParams = {
  email: string
  username: string
  password: string,
  firstName: string,
  lastName: string,
  phoneNumber: string
}

export type ResetParams = {
  phoneOrEmail: string,
  code: string,
  new_password: string
}

export type UserDataType = {
  id: number
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  role: string
}

export type AuthValuesType = {
  loginUser: LoginParams,
  authUser: RegisterParams,
  setAuthUser: (value: RegisterParams) =>void,
  resetUser: ResetParams,
  loading: boolean
  logout: () => void
  user: UserDataType | null
  setLoading: (value: boolean) => void
  setUser: (value: UserDataType | null) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void,
  resetPassword: (params: ResetParams, errorCallback?: ErrCallbackType) => void,
  createAccountNext: (params: RegisterParams, errorCallback?: ErrCallbackType) => void,
  loginNext: (params: LoginParams, errorCallback?: ErrCallbackType) => void,
  handleForgotPasswordNext: (params: ResetParams, errorCallback?: ErrCallbackType) => void
}
