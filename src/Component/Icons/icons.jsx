import React from "react";
import { Icon as Iconify } from "@iconify/react";

// Helper function to generate icons and reduce repetitive code
const createIcon = (iconName, defaultWidth = "1.5em") => {
  return (props) => <Iconify icon={iconName} width={defaultWidth} {...props} />;
};

export const Icons = {
  // Navigation & UI
  Home: createIcon("ph:house"),
  fullhome: createIcon("material-symbols:home"),
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
  UpDownArrow: createIcon("streamline:arrow-curvy-up-down-2"),
  checkfilled: createIcon("lets-icons:check-fill"),
  Rightsideaarow: createIcon("iconamoon:arrow-right-2-thin"),

  // Contact & Social
  Phone: createIcon("ph:phone"),
  Email: createIcon("ph:envelope"),
  Location: createIcon("ph:map-pin"),
  Facebook: createIcon("gg:facebook"),
  Pinterest: createIcon("formkit:pinterest"),
  LinkedIn: createIcon("ri:linkedin-fill"),

  // Utilities
  Check: createIcon("ph:check-circle"),
  Star: createIcon("ph:star-fill"),
  Users: createIcon("ph:users-three"),
  SealCheck: createIcon("ph:seal-check"),
  Sun: createIcon("ph:sun"),
  Desktop: createIcon("ph:monitor"),

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

  // Digital Signage Categories (Your custom icons)
  Church: createIcon("ph:church", "1em"),
  BarsRestaurants: createIcon("fa-solid:utensils", "1em"),
  EventsConcert: createIcon("fa:music", "1em"),
  OutdoorBillboards: createIcon("mdi:billboard", "1em"),
  OutdoorLED: createIcon("ph:monitor", "1em"),
  SchoolsUni: createIcon("fa:graduation-cap", "1em"),
  Automotive: createIcon("fa:car", "1em"),
  Hospitality: createIcon("fa:hotel", "1em"),
  Healthcare: createIcon("fa:hospital-o", "1em"),
  ShoppingMall: createIcon("fa:shopping-bag", "1em"),
  RetailStore: createIcon("fa:shopping-cart", "1em"),
  CarWash: createIcon("fa:shower", "1em"),

  // LED- Neon
  neonText: createIcon("material-symbols:format-color-text-rounded", "1em"),
  neonColor: createIcon("material-symbols:format-paint-outline-rounded", "1em"),
  neonFont: createIcon("material-symbols:font-download-outline-rounded", "1em"),
  neonSize: createIcon("proicons:screen-size", "1em"),
  neonBackboard: createIcon("material-symbols:layers-outline-rounded", "1em"),
  neonBackground: createIcon("material-symbols:image-outline", "1em"),
  neonEffects: createIcon("octicon:light-bulb-24", "1em"),
  neonLedKit: createIcon("tabler:bulb-filled", "1em"),

  // Direct Mail (Targeting Categories)
  TargetingUsers: createIcon("feather:users"),
  TargetingDollar: createIcon("feather:dollar-sign"),
  TargetingHome: createIcon("feather:home"),
  TargetingSmile: createIcon("feather:smile"),
  TargetingBriefcase: createIcon("feather:briefcase"),
  TargetingArrowRight: createIcon("feather:arrow-right"),

  // Direct Mail (Expert Marketing Solutions)
  ListBullets: createIcon("feather:target"),
  PenNib: createIcon("feather:pen-tool"),
  Printer: createIcon("feather:printer"),
  Envelope: createIcon("feather:mail"),

  // Direct Mail (Vertical Timeline)
  TimelineTarget: createIcon("ph:target"),
  TimelineCompass: createIcon("ph:compass"),
  TimelineRocket: createIcon("ph:rocket-launch"),
  TimelineHandshake: createIcon("ph:handshake"),
  TimelineSealCheck: createIcon("ph:seal-check"),
  TimelineTrendingUp: createIcon("ph:trend-up"),
  //Direct Mail
  roundLocation:createIcon("fluent-mdl2:location-outline"),
  Earth:createIcon("pajamas:earth"),
  database:createIcon("material-symbols-light:database-outline"),
  route:createIcon("ph:route"),
  percent:createIcon("mdi:percent-outline"),
  eye:createIcon("bytesize:eye"),
  hand:createIcon("material-symbols:back-hand-outline"),
  filllocation:createIcon("material-symbols:my-location-rounded"),
  fillshapcheck:createIcon("ri:shield-check-line"),
  flag: createIcon("ph:flag"),
  fingerprint: createIcon("ph:fingerprint"),
  squareArrowRight: createIcon("heroicons:arrow-top-right-on-square-20-solid"),
};
