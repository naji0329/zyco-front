import validator from "validator"

type ValidationResponse = {
  error: boolean,
  success: boolean,
  message: string
}

export const validatePassword = (password: string): ValidationResponse => {
  if(password === '') {

    return {
      error: true,
      success: false,
      message: 'Password is required'
    }
  }else if(password.length < 6) {

    return {
      error: true,
      success: false,
      message: 'Password minimum length is 6'
    }
  }else if(!validator.matches(password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/)) {

    return {
      error: true,
      success: false,
      message: 'Please enter strong password'
    }
  }

  return {
    error: false,
    success: true,
    message: ''
  }
}

export const validateEmail = (email: string): ValidationResponse => {
  if(!validator.isEmail(email)) {

    return {
      error: true,
      success: false,
      message: 'Invalid email'
    }
  }else{

    return {
      error: false,
      success: true,
      message: ''
    }
  }
}

export const validatePhoneNumber = (phoneNumber: string): ValidationResponse => {
  if(!validator.isMobilePhone(phoneNumber)) {

    return {
      error: true,
      success: false,
      message: 'Invalid phone'
    }
  }else{

    return {
      error: false,
      success: true,
      message: ''
    }
  }
}


export const validateRequired = (field: string, value: string): ValidationResponse => {
  if(value == '') {

    return {
      error: true,
      success: false,
      message: `${field} is required`
    }
  }
  
  return {
    error: false,
    success: true,
    message: ''
  }
} 

