import React from 'react'

import { BOOKING_STATUS } from '../../constants'
import style from './Seat.module.scss'

interface SeatType {
  row: string
  column: number
  seatPrice: string
  bookingStatus: BOOKING_STATUS
  onSelectSeat: (row: string, column: number, seatPrice: number) => void
}

const STYLE_MAP = {
  [BOOKING_STATUS.AVAILABLE]: style.seatAvailable,
  [BOOKING_STATUS.BLOCKED]: style.seatBlocked,
  [BOOKING_STATUS.BOOKED]: style.seatBooked,
  [BOOKING_STATUS.DISABLED]: style.seatDisabled,
  [BOOKING_STATUS.UNAVAILABLE]: style.seatUnavailable
}

export const Seat: React.FC<SeatType> = ({ row, column, seatPrice, bookingStatus, onSelectSeat }) => {
  return (
    <button
      disabled={[BOOKING_STATUS.BLOCKED, BOOKING_STATUS.UNAVAILABLE, BOOKING_STATUS.DISABLED].includes(bookingStatus)}
      className={`${style.seat} ${STYLE_MAP[bookingStatus]}`}
      onClick={() => onSelectSeat(row, column, parseInt(seatPrice))}
    >
      <span className={style.seatLabel}> &#x20b9; {seatPrice}</span>
    </button>
  )
}