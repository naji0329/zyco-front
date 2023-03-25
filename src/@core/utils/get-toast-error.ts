const getError = (error: string) => {
  return error.split(':')[1];
}

export default getError;