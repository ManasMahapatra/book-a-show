import { BOOKING_STATUS } from './constants'
export interface SeatType {
  bookingStatus: BOOKING_STATUS
  seatPrice: string
}

export type SeatBookingsType = Record<string, Array<SeatType>>