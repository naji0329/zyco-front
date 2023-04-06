import { Dispatch, SetStateAction } from "react"

export type AddBookingFormTypes = {
  showOwnership: boolean,
  setShowOwnership: Dispatch<SetStateAction<boolean>>
}