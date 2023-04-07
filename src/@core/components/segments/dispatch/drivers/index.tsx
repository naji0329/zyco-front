import { Icon } from '@iconify/react';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';

import React, { ChangeEvent, useState } from 'react'
import UserItem from 'src/@core/components/user-item';

const Drivers = () => {
  const [search, setSearch] = useState('');
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
      <OutlinedInput
        fullWidth
        size='small'
        placeholder='Search'
        value={search}
        id='search'
        onChange={(e: ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)}
        type='text'
        sx={{my: 5}}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              edge='end'
              onClick={()=>console.log('search')}
            >
              <Icon fontSize={20} icon='ic:baseline-search' />
            </IconButton>
          </InputAdornment>
        }
      />
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
    </>
  )
}

export default Drivers;