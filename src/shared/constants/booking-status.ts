export const BOOKING_STATUS = {
  DRAFT: "draft",
  PENDING: "pending",
  PAID: "paid",
  CANCELLED: "cancelled",
  REFUNDED: "refunded",
} as const;

export type BookingStatus =
  typeof BOOKING_STATUS[keyof typeof BOOKING_STATUS];