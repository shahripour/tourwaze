export function formatPersianDate(date: string) {
  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function formatShortPersianDate(date: string) {
  return new Intl.DateTimeFormat("fa-IR", {
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function formatWeekDay(date: string) {
  return new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
  }).format(new Date(date));
}