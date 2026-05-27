import React from "react";
import { Icon as Iconify } from "@iconify/react";

// Helper function to generate icons and reduce repetitive code
const createIcon = (iconName, defaultWidth = "1.5em") => {
  return (props) => <Iconify icon={iconName} width={defaultWidth} {...props} />;
};

export const Icons = {
  // Navigation & UI
  Search: createIcon("ph:magnifying-glass"),
  Profile: createIcon("iconamoon:profile-thin"),
  Menu: createIcon("heroicons:bars-3"),
  Close: createIcon("heroicons:x-mark"),
  MenuIcon: createIcon("akar-icons:three-line-horizontal"),
  
  // Arrows & Chevrons
  ArrowRight: createIcon("ph:arrow-right"),
  ArrowDownRight: createIcon("ph:arrow-down-right"),
  ArrowUpRight: createIcon("ph:arrow-up-right"),
  ChevronDown: createIcon("ph:caret-down"),
  ChevronRight: createIcon("ph:caret-right"),
  
  // Contact & Social
  Phone: createIcon("ph:phone"),
  Email: createIcon("ph:envelope"),
  Location: createIcon("ph:map-pin"),
  
  // Utilities
  Check: createIcon("ph:check-circle"),
  Star: createIcon("ph:star-fill"),

  // Services (Passing "1em" to override the default "1.5em" width)
  Signage: createIcon("ph:squares-four", "1em"),
  Printing: createIcon("ph:printer", "1em"),
  DirectMailing: createIcon("ph:envelope-simple", "1em"),
  WebDesigning: createIcon("ph:globe", "1em"),
  SEO: createIcon("ph:magnifying-glass", "1em"),

  // Signage Sub-categories
  ExteriorSign: createIcon("ph:image", "1em"),
  InteriorSign: createIcon("ph:stack", "1em"),
  DigitalBoard: createIcon("ph:desktop", "1em"),
  NeonSign: createIcon("ph:lightning", "1em"),
  WallGraphics: createIcon("ph:image", "1em"),
  VehicleGraphics: createIcon("ph:truck", "1em"),
};
