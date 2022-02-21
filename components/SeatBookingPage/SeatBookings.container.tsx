import React, { useState, useCallback, useEffect } from 'react'
import Router, { useRouter } from 'next/router'

import { SeatBookingsView } from './SeatBookings.view'
import { SeatBookingsType } from './types'
import { BOOKING_STATUS } from './constants'
import { useSeatBookings } from '../../context_hooks/useSeatBookings'
import { seatingStructure as seats } from '../../mockData/seats'
import { pageLinks } from '../../pageLinks'

export const SeatBookingsContainer: React.FC<{}> = () => {
  const {
    addSelectedSeat,
    removeSelectedSeat,
    startBooking,
    getSelectedSeats,
    getBookingExpiredCount,
    getBookingStatus,
    getSeatingStructure,
    saveSeatingStructureBeforeBooking,
    addBookingPrice,
    substractBookingPrice
  } = useSeatBookings()
  const router = useRouter()
  const initialSeatingStructure = getSeatingStructure()
  const bookingExpiredCount = getBookingExpiredCount()
  const bookingStatus = getBookingStatus()
  const { size: selectedSeatsLength } = getSelectedSeats()
  const [seatingStructure, setSeatingStructure] = useState<SeatBookingsType>(initialSeatingStructure)

  const onSelectSeat = useCallback((row: string, column: number, seatPrice: number) => {
    const newSeatingStructure = JSON.parse(JSON.stringify(seatingStructure));
    // Check whether to add the seat to the booking list or remive
    newSeatingStructure[row][column].bookingStatus = 
      newSeatingStructure[row][column].bookingStatus === BOOKING_STATUS.AVAILABLE
        ? BOOKING_STATUS.BOOKED
        : BOOKING_STATUS.AVAILABLE

    // Add or remove to the current booking list depedning on the seat type.
    newSeatingStructure[row][column].bookingStatus === BOOKING_STATUS.AVAILABLE
      ? removeSelectedSeat(`${row}${column+1} `)
      : addSelectedSeat(`${row}${column+1} `)

    newSeatingStructure[row][column].bookingStatus === BOOKING_STATUS.AVAILABLE
      ? substractBookingPrice(seatPrice)
      : addBookingPrice(seatPrice)
    
    // Update current seating structure state
    setSeatingStructure(newSeatingStructure)
  }, [seatingStructure, addSelectedSeat, removeSelectedSeat, setSeatingStructure, substractBookingPrice, addBookingPrice])

  const onBookSeats = useCallback(() => {
    saveSeatingStructureBeforeBooking(seatingStructure)
    startBooking()
    router.push(pageLinks.checkout)
    // Here we need to update the booking status of selected seats in Firebase to BLOCKED, so that other people can't select that.
  }, [startBooking, saveSeatingStructureBeforeBooking, router, seatingStructure])

  useEffect(() => {
    if(!bookingStatus && bookingExpiredCount > 0) {
      setSeatingStructure(JSON.parse(seats))
    }
  }, [bookingExpiredCount, bookingStatus])

  return (
    <SeatBookingsView seatingStructure={seatingStructure} onSelectSeat={onSelectSeat} onBookSeats={onBookSeats} selectedSeatsLength={selectedSeatsLength}/>
  )
}