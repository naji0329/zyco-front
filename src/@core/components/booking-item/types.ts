import React, { Dispatch, SetStateAction } from "react"

export type BookingItemProps = {
  title?: string,
  subtitle: string,
  startIcon?: string,
  startAvatar?: string,
  children?: React.ReactNode,
  onClick: ()=>void
}