// ** React Imports
import { useContext } from 'react'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useAuth } from 'src/hooks/useAuth'

const ACLPage = () => {
  // ** Hooks
  const ability = useContext(AbilityContext)

  //auth
  const auth = useAuth();

  return (
    <Grid container spacing={6}>
      <Grid item md={6} xs={12}>
        <Card>
          <CardHeader title={`${auth.user?.firstName + " " + auth.user?.lastName}`} />
          <CardContent>
            <Typography sx={{ mb: 4 }}>This page shows you are signed in</Typography>
            <Typography sx={{ color: 'primary.main' }}>Hello {auth.user?.firstName}</Typography>
          </CardContent>
        </Card>
      </Grid>
      {ability?.can('read', 'analytics') ? (
        <Grid item md={6} xs={12}>
          <Card>
            <CardHeader title='Analytics' />
            <CardContent>
              <Typography sx={{ mb: 4 }}>User with 'Analytics' subject's 'Read' ability can view this card</Typography>
              <Typography sx={{ color: 'error.main' }}>This card is visible to 'admin' only</Typography>
            </CardContent>
          </Card>
        </Grid>
      ) : null}
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default ACLPage
