// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { Button, CardContent, TextField, Typography, useTheme } from '@mui/material'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useAuth } from 'src/hooks/useAuth'
import CustomSelect from 'src/@core/components/select'

const Home = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Button variant='contained' color='primary' startIcon={<Icon icon='ic:baseline-perm-identity' />}>
          ACCOUNT
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={4} sx={{
              alignItems: 'center',
              mb: 8
            }}>
              <Grid item>
                <Image src='/images/avatars/1.png' alt='profile' width={120} height={120} style={{borderRadius: 10}} />
              </Grid>
              <Grid item>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Grid container spacing={4}>
                      <Grid item>
                        <Button variant='contained' color='primary'>UPLOAD NEW PHOTO</Button>
                      </Grid>
                      <Grid item>
                        <Button variant='outlined' color='error'>RESET</Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography fontSize={12} color={theme.palette.secondary.main}>Allowed JPG, GIF or PNG, Max size of BOOK</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <form>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <TextField 
                    label='Username'
                    fullWidth
                    defaultValue='Johndoe'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    label='Email'
                    fullWidth
                    defaultValue='john.doe@gmail.com'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    label='Phone number'
                    fullWidth
                    defaultValue='+31 612345678'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    label='Base city'
                    fullWidth
                    defaultValue='Rotterdam'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={5}>
                    <Grid item xs={6}>
                      <CustomSelect 
                        label='Country'
                        id='country'
                        defaultValue={1}
                        menuItems={[
                          {
                            value: 1,
                            text: 'Netherlands'
                          }
                        ]}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CustomSelect 
                        label='Language'
                        id='language'
                        defaultValue={1}
                        menuItems={[
                          {
                            value: 1,
                            text: 'Dutch'
                          }
                        ]}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={5}>
                    <Grid item xs={6}>
                      <CustomSelect 
                        label='Status'
                        id='status'
                        defaultValue={1}
                        menuItems={[
                          {
                            value: 1,
                            text: '(GMT-11:00) International Date Line West'
                          }
                        ]}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CustomSelect 
                        label='Currency'
                        id='currency'
                        defaultValue={1}
                        menuItems={[
                          {
                            value: 1,
                            text: 'Euro'
                          }
                        ]}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={4}>
                    <Grid item>
                      <Button variant='contained' color='primary'>SAVE CHANGES</Button>
                    </Grid>
                    <Grid item>
                      <Button variant='outlined' color='secondary'>CANCER</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
