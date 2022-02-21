import React, { createContext, useContext, useState, SetStateAction, Dispatch } from 'react'
import { SeatBookingsType } from '../components/SeatBookingPage/types'
import { seatingStructure as seats } from '../mockData/seats'

interface StateType {
  selectedSeats: Set<string>
  bookingStatus: boolean
  seatingStructureWhileBooking: SeatBookingsType
  bookingExpiredCount: number
  bookingCompleted: boolean
  totalPrice: number
}

const SeatBookingsContext = createContext<[StateType, Dispatch<SetStateAction<StateType>>]>(null)
export const SeatBookingContextProvider: React.FC = ({ children }) => {
  const selectedSeats = new Set<string>()
  const value = useState<StateType>({
    selectedSeats,
    bookingStatus: false,
    seatingStructureWhileBooking: JSON.parse(seats),
    bookingExpiredCount: 0,
    bookingCompleted: false,
    totalPrice: 0
  })
  return (
  <SeatBookingsContext.Provider value={value}>
    {children}
  </SeatBookingsContext.Provider>
  )
}
export const useSeatBookings = () => {
  const [bookingDetails, setBookingDetails] = useContext(SeatBookingsContext)

  const getBookingStatus = () => bookingDetails.bookingStatus

  const getSelectedSeats = () => bookingDetails.selectedSeats

  const getSeatingStructure = () => bookingDetails.seatingStructureWhileBooking

  const getBookingExpiredCount = () => bookingDetails.bookingExpiredCount

  const getBookingConfirmed = () => bookingDetails.bookingCompleted

  const getTotalPrice = () => bookingDetails.totalPrice

  const startBooking = () => {
    setBookingDetails((currentBookingDetails) => ({
      ...currentBookingDetails,
      bookingStatus: true,
    }))
  }

  const stopBooking = () => {
    setBookingDetails((currentBookingDetails) => ({
      ...currentBookingDetails,
      bookingStatus: false
    }))
  }

  const addSelectedSeat = (seat: string) => {
    setBookingDetails((currentBookingDetails) => ({
      ...currentBookingDetails,
      selectedSeats: currentBookingDetails.selectedSeats.add(seat),
    }))
  }

  const removeSelectedSeat = (seat: string) => {
    setBookingDetails((currentBookingDetails) => {
      currentBookingDetails.selectedSeats.delete(seat)
      return {
        ...currentBookingDetails,
        selectedSeats: currentBookingDetails.selectedSeats,
      }
    })
  }

  const clearSelectedSeats = () => {
    setBookingDetails((currentBookingDetails) => {
      currentBookingDetails.selectedSeats.clear()
      return {
        ...currentBookingDetails,
        selectedSeats: currentBookingDetails.selectedSeats,
      }
    })
  }

  const addBookingPrice = (price: number) => {
    setBookingDetails((currentBookingDetails) => ({
      ...currentBookingDetails,
      totalPrice: currentBookingDetails.totalPrice + price
    }))
  }

  const substractBookingPrice = (price: number) => {
    setBookingDetails((currentBookingDetails) => ({
      ...currentBookingDetails,
      totalPrice: currentBookingDetails.totalPrice - price
    }))
  }

  const clearBookingPrice = () => {
    setBookingDetails((currentBookingDetails) => ({
      ...currentBookingDetails,
      totalPrice: 0
    }))
  }

  const increaseBookingExpiredCount = () => {
    setBookingDetails((currentBookingDetails) => ({
      ...currentBookingDetails,
      bookingExpiredCount: currentBookingDetails.bookingExpiredCount + 1
    }))
  }

  const saveSeatingStructureBeforeBooking = (seatingStructure: SeatBookingsType) => {
    setBookingDetails((currentBookingDetails) => ({
      ...currentBookingDetails,
      seatingStructureWhileBooking: seatingStructure
    }))
  }

  const resetSeatingStructure = () => {
    setBookingDetails((currentBookingDetails) => ({
      ...currentBookingDetails,
      seatingStructureWhileBooking: JSON.parse(seats)
    }))
  }

  const confirmBooking = () => {
    setBookingDetails((currentBookingDetails) => ({
      ...currentBookingDetails,
      bookingCompleted: true
    }))
  }

  return {
    getBookingExpiredCount,
    getSeatingStructure,
    getSelectedSeats,
    getBookingStatus,
    getBookingConfirmed,
    getTotalPrice,
    startBooking,
    stopBooking,
    addSelectedSeat,
    removeSelectedSeat,
    clearSelectedSeats,
    saveSeatingStructureBeforeBooking,
    resetSeatingStructure,
    increaseBookingExpiredCount,
    confirmBooking,
    addBookingPrice,
    substractBookingPrice,
    clearBookingPrice
  }

}