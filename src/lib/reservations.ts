import { config } from "@/config/restaurant.config";

/**
 * Reservation helpers — provider-agnostic. The <Reservations> component decides
 * how to render based on `config.reservations.provider`; these helpers feed the
 * internal booking form.
 */

/** Dinner-service time slots, every 30 minutes. Adjust range as needed. */
export function timeSlots(
  startHour = 17,
  endHour = 22,
  stepMinutes = 30
): string[] {
  const slots: string[] = [];
  for (let m = startHour * 60; m <= endHour * 60; m += stepMinutes) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    slots.push(`${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`);
  }
  return slots;
}

/** Party-size options from 1 to the configured maximum. */
export function partySizes(): number[] {
  return Array.from({ length: config.reservations.maxPartySize }, (_, i) => i + 1);
}

export const reservations = config.reservations;
