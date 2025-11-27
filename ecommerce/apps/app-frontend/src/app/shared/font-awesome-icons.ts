import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import {
  faUser,
  faShoppingCart,
  faSearch,
  faHeart,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

// Only load icons actually used in the app to reduce bundle size
export const fontAwesomeIcons: IconDefinition[] = [
  faUser,
  faShoppingCart,
  faSearch,
  faHeart,
  faSignOutAlt,
  faCartShopping,
  faFacebook,
  faTwitter,
  faYoutube,
  faTruckFast
];