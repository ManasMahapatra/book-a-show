import React from 'react'
import { useSeatBookings } from '../../context_hooks/useSeatBookings'
import { BookingTimer } from '../BookingTimer/BookingTimer'
import style from './Layout.module.scss'

const BOOKING_TIMER_MINUTES = 5
const BOOKING_TIMER_SECONDS = 0

const Layout: React.FC<{}> = ({ children }) => {
  const { getBookingStatus } = useSeatBookings()
  return (
    <React.Fragment>
      <div className={style.layout__container}>
        {children}
      </div>
      {getBookingStatus() && (
        <div className={style.layoutContainerTimer}>
          <BookingTimer
            minutes={BOOKING_TIMER_MINUTES}
            seconds={BOOKING_TIMER_SECONDS}
          />
        </div>
      )}
    </React.Fragment>
  )
}

export default Layout