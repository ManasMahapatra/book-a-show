import { SeatBookingsType } from '../components/SeatBookingPage/types'
import { BOOKING_STATUS } from '../components/SeatBookingPage/constants'
// The seating structure is mapped as an object where key is Row and it contains an array of the column.
// Maintaining as object of arrays to help storing in Firebase for realtime update
const seatings: SeatBookingsType = {
  'A': [
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.DISABLED,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
  ],
  'B': [
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.DISABLED,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.BLOCKED,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.BLOCKED,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
  ],
  'C': [
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
  ],
  'D': [
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
  ],
  'E': [
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '250'
    },
  ],
  'F': [
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '250'
    },
  ],
  'G': [
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '250'
    },
  ],
  'H': [
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '750'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.UNAVAILABLE,
      seatPrice: '450'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '250'
    },
  ],
  'I': [
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '150'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '150'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '150'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '150'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '150'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '150'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '150'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '150'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '150'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '150'
    },
  ],
  'J': [
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '350'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '350'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '350'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '350'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '350'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '350'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '350'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '350'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '350'
    },
    {
      bookingStatus: BOOKING_STATUS.AVAILABLE,
      seatPrice: '350'
    },
  ],
}

export const seatingStructure = JSON.stringify(seatings)