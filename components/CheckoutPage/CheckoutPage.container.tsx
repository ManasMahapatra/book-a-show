import React, { useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useSeatBookings } from '../../context_hooks/useSeatBookings'
import { pageLinks } from '../../pageLinks'
import { CheckoutPageView } from './CheckoutPage.view'

export const CheckoutPageContainer: React.FC<{}> = () => {
  const { getBookingStatus, getSelectedSeats, stopBooking, getBookingConfirmed, confirmBooking, getTotalPrice } = useSeatBookings()
  const bookingStatus = getBookingStatus()
  const isBookingConfirmed = getBookingConfirmed()
  const selectedSeats = getSelectedSeats()
  const totalPrice = getTotalPrice()
  const router = useRouter()

  const onBackClick = useCallback(() => {
    router.push(pageLinks.seats)
  }, [router])

  const onConfirmBooking = useCallback(() => {
    confirmBooking()
    stopBooking()
  }, [stopBooking, confirmBooking])

  useEffect(() => {
    if(!bookingStatus && !isBookingConfirmed) {
      router.push(pageLinks.seats)
    }
  }, [bookingStatus, router, isBookingConfirmed])
  return <CheckoutPageView onBackClick={onBackClick} selectedSeats={selectedSeats} onConfirmBooking={onConfirmBooking} isBookingConfirmed={isBookingConfirmed} totalPrice={totalPrice}/>
}