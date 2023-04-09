import { Box, CardContent } from '@mui/material';

import React from 'react'
import SearchInput from 'src/@core/components/search-input';
import UserItem from 'src/@core/components/user-item';

const Drivers = () => {
  const drivers = [
    {
      id: 1,
      name: 'Cecilia Payne',
      connections: 45,
      status: 'Available'
    },
    {
      id: 2,
      name: 'Curtis Fletcher',
      connections: 132000,
      status: 'Offline'
    },
    {
      id: 3,
      name: 'Alice Stone',
      connections: 125,
      status: 'Busy'
    }
  ]

  return (
    <>
      <CardContent>
      <Box my={5}>
        <SearchInput />
      </Box>
      {
        drivers.map((driver, index)=>(
          <UserItem
            key={index}
            item={{
              title: driver.name,
              src: '/images/avatars/1.png',
              subtitle: `${driver.connections} Connections`,
              avatarVariant: 'circular',
              mb: 4,
              customChip: {
                skin: 'light',
                size: 'small',
                chipText: driver.status,
                chipColor: driver.status === 'Available' ? 'success' : driver.status === 'Offline' ? 'error' : 'warning'
              },
              more: true
            }} 
          />
        ))
      }
      </CardContent>
    </>
  )
}

export default Drivers;