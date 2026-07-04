export const PAYMENT_METHODS = {
  ONLINE: "online",
  WALLET: "wallet",
  OFFLINE: "offline",
} as const;

export type PaymentMethod =
  typeof PAYMENT_METHODS[keyof typeof PAYMENT_METHODS];