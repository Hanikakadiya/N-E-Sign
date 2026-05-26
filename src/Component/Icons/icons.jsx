import React from "react";
import { Icon as Iconify } from "@iconify/react";

// Centralized Icon Library using Iconify
// You can easily add more icons here from https://icones.js.org/
export const Icons = {
  // Navigation & UI
  Search: (props) => <Iconify icon="ph:magnifying-glass" width="1.5em" {...props} />,
  Profile: (props) => <Iconify icon="iconamoon:profile-thin" width="1.5em" {...props} />,
  Menu: (props) => <Iconify icon="heroicons:bars-3" width="1.5em" {...props} />,
  Close: (props) => <Iconify icon="heroicons:x-mark" width="1.5em" {...props} />,
  
  // Arrows & Chevrons
  ArrowRight: (props) => <Iconify icon="ph:arrow-right" width="1.5em" {...props} />,
  ChevronDown: (props) => <Iconify icon="ph:caret-down" width="1.5em" {...props} />,
  ChevronRight: (props) => <Iconify icon="ph:caret-right" width="1.5em" {...props} />,
  
  // Contact & Social
  Phone: (props) => <Iconify icon="ph:phone" width="1.5em" {...props} />,
  Email: (props) => <Iconify icon="ph:envelope" width="1.5em" {...props} />,
  Location: (props) => <Iconify icon="ph:map-pin" width="1.5em" {...props} />,
  
  // Utilities
  Check: (props) => <Iconify icon="ph:check-circle" width="1.5em" {...props} />,
  Star: (props) => <Iconify icon="ph:star-fill" width="1.5em" {...props} />,
};
