import { createContext } from "react";

import type {

  BookingState,

  Passenger,

  SelectedService,

} from "../types/booking";

export interface BookingContextType {

  booking: BookingState;

  setTour(id: number): void;

  setDeparture(id: number, price: number): void;

  addPassenger(): void;

  removePassenger(index: number): void;

  updatePassenger(

    index: number,

    passenger: Passenger

  ): void;

  toggleService(service: SelectedService): void;

  setCoupon(code: string): void;

  setWallet(amount: number): void;

  reset(): void;

}

export const BookingContext =
createContext<BookingContextType | null>(null);