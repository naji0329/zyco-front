import React from 'react'
import CustomCardHeader from 'src/@core/components/custom-card-header'
import UserItem from 'src/@core/components/user-item'
import { Box, CardContent } from '@mui/material'
import { DispatchToProps } from './types'

export default function DispatchTo({onBack}: DispatchToProps) {
  const dispatchToElements: Array<{id: number, to: string, description: string}> = [
    {
      id: 1,
      to: 'Me',
      description: 'Dispatch to myself'
    },
    {
      id: 2,
      to: 'Group',
      description: 'Dispatch to group'
    },
  ]

  return (
    <>
      <CustomCardHeader title='Dispatch to' startIcon='ic:baseline-keyboard-arrow-left' onBack={()=>onBack()} />
      <CardContent>
      {
        dispatchToElements.map((element, index)=>(
          <Box sx={{cursor: 'pointer'}} key={index}>
            <UserItem 
              item={{
              title: element.to,
              src: '/images/avatars/1.png',
              subtitle: element.description,
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
