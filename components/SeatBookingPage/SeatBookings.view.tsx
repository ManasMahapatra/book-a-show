import React from 'react'

import { Seat } from './components/Seat/Seat'
import style from './SeatBookingsView.module.scss'
import { SeatBookingsType } from './types'

interface SeatBookingsViewProps {
  seatingStructure: SeatBookingsType
  selectedSeatsLength: number
  onSelectSeat: (row: string, column: number, seatPrice: number) => void
  onBookSeats: () => void
}

export const SeatBookingsView: React.FC<SeatBookingsViewProps> = ({
  seatingStructure,
  selectedSeatsLength,
  onSelectSeat,
  onBookSeats
}) => {
  return (
   <div className={style.theatreViewContainer}>
     <div className={style.seatBookingContainer}>
       {Object.entries(seatingStructure).map(([ row, column ], index) => {
         return (
           <div className={style.seatBookingContainerRow} key={index}>
             <span className={style.seatBookingContainerRowLabel}>{row}</span>
             {column.map(({ seatPrice, bookingStatus }, index) => (
               <Seat
                key={index}
                row={row}
                column={index}
                seatPrice={seatPrice}
                bookingStatus={bookingStatus}
                onSelectSeat={onSelectSeat}
               />
             ))}
          </div>
         )
       })}
     </div>
     <div className={style.screenViewContainer}>
       <div className={style.screenLabel}>
        SCREEN THIS SIDE
       </div>
       {selectedSeatsLength > 0 && (<button className={style.buttonBookSeats} onClick={onBookSeats}>
         BOOK SEATS
       </button>)}
     </div>
   </div> 
  )
}