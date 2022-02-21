import React, { useState, useEffect } from 'react'
import { useSeatBookings } from '../../context_hooks/useSeatBookings'
import style from './BookingTimer.module.scss'

interface BookingTimerPropType {
  minutes: number
  seconds: number
}

export const BookingTimer: React.FC<BookingTimerPropType> = ({ minutes: initialMinutes, seconds: initialSeconds }) => {
  const [minutes, setMinutes] = useState(initialMinutes)
  const [seconds, setSeconds] = useState(initialSeconds)
  const { stopBooking, clearSelectedSeats, resetSeatingStructure, increaseBookingExpiredCount, clearBookingPrice } = useSeatBookings()

  useEffect(() => {
    let timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerInterval)
          // Once the timer expires clear all the selected seats
          resetSeatingStructure()
          increaseBookingExpiredCount()
          clearBookingPrice()
          clearSelectedSeats()
          // Stop booking so as to hide the timer
          stopBooking()
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => clearInterval(timerInterval)
  })

  return (
    <div className={style.bookingTimerText}>
      Your seats have been blocked and others can not book the selected seats now. You must complete the booking within {minutes} minutes and {seconds} seconds otherwise your selected seats will be unblocked.
    </div>
  )
}
