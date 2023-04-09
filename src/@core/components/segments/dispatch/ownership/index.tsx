import React from 'react'
import CustomCardHeader from 'src/@core/components/custom-card-header'
import { OwnershipProps } from './types'
import UserItem from 'src/@core/components/user-item'
import { Box, CardContent } from '@mui/material'

export default function OwnershipTrip({onBack}: OwnershipProps) {
  const tripOwnerships: Array<{id: number, owner: string, description: string}> = [
    {
      id: 1,
      owner: 'Me',
      description: 'This trip belongs to the owner'
    },
    {
      id: 2,
      owner: 'Group',
      description: 'This trip belongs to the group'
    },
    {
      id: 3,
      owner: 'Business',
      description: 'This trip belongs to the business'
    }
  ]

  return (
    <>
      <CustomCardHeader title='Ownership trip' startIcon='ic:baseline-keyboard-arrow-left' onBack={()=>onBack()} />
      <CardContent>
      {
        tripOwnerships.map((ownership, index)=>(
          <Box sx={{cursor: 'pointer'}} key={index}>
            <UserItem 
              item={{
              title: ownership.owner,
              src: '/images/avatars/1.png',
              subtitle: ownership.description,
              avatarVariant: 'circular',
              more: false,
              mb: 4
            }} />
          </Box>
        ))
      }
      </CardContent>
    </>
  )
}
