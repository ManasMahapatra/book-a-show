import React from 'react'
import style from './CheckoutPageView.module.scss'

interface CheckoutPageViewPropType {
  onBackClick: () => void
  selectedSeats: Set<string>
  isBookingConfirmed: boolean
  onConfirmBooking: () => void
  totalPrice: number
}

export const CheckoutPageView: React.FC<CheckoutPageViewPropType> = ({
  onBackClick,
  selectedSeats,
  totalPrice,
  onConfirmBooking,
  isBookingConfirmed
}) => {
  return (
    <div className={style.checkoutPageContainer}>
      {!isBookingConfirmed ? (
        <React.Fragment>
          <div>
            Selected Seats: <strong>{selectedSeats}</strong><br/>
            Total Price: <strong>{totalPrice}</strong>
          </div>
          <button className={style.checkoutPageConfirmButton} onClick={onConfirmBooking}>
            Confirm Booking
          </button>
          <button className={style.checkoutPageBackButton} onClick={onBackClick}>
            Go back to seat selection
          </button>
        </React.Fragment>
      ) : (
        <h1>Booking Confirmed</h1>
      )}
    </div>
  )
}