import React from "react"

export type CardHeaderProps = {
  title: string,
  action?: React.ReactNode,
  startIcon: string,
  onBack?: ()=>void
}