import type { ComponentType } from "react";
import type { SectionId } from "@/config/types";
import { Hero } from "./Hero";
import { Story } from "./Story";
import { Chef } from "./Chef";
import { SignatureDishes } from "./SignatureDishes";
import { Menu } from "./Menu";
import { Gallery } from "./Gallery";
import { Reservations } from "./Reservations";
import { Reviews } from "./Reviews";
import { Events } from "./Events";
import { Location } from "./Location";
import { Contact } from "./Contact";

/**
 * Section registry — maps a SectionId to its component. The page renders from
 * config.sections, so adding a section = add a component + an entry here.
 */
export const sectionRegistry: Record<SectionId, ComponentType> = {
  hero: Hero,
  story: Story,
  chef: Chef,
  signature: SignatureDishes,
  menu: Menu,
  gallery: Gallery,
  reservations: Reservations,
  reviews: Reviews,
  events: Events,
  location: Location,
  contact: Contact,
};
